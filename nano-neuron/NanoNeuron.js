function NanoNeuron(w, b) {
    this.w = w;
    this.b = b;

    this.predict = (x) => {

        return x * this.w + this.b;
    }
}

function celciusToFarenheit(c) {
    const w = 1.8;
    const b = 32;
    const f = c * w + b;
    return f;
}

function generateDataSets() {
    const xTrain = [];
    const yTrain = [];

    for (let x = 0; x < 100; x++) {
        const y = celciusToFarenheit(x);
        xTrain.push(x);
        yTrain.push(y);
    }

    const xTest = [];
    const yTest = [];

    for (let x = 0.5; x < 100; x++) {
        const y = celciusToFarenheit(x);
        xTest.push(x);
        yTest.push(y);
    }
    return [xTrain, yTrain, xTest, yTest];
}

function predictionCost(y, prediction) {
    return (y - prediction) ** 2 / 2;
}

function forwardPropagation(model, xTrain, yTrain) {
    const m = xTrain.length;

    const predictions = [];
    let cost = 0;
    for (let i = 0; i < m; i++) {
        const prediction = nanoNeuron.predict(xTrain[i]);
        cost += predictionCost(yTrain[i], prediction)
        predictions.push(prediction);
    }
    cost /= m;
    // console.log('P', predictions, cost)
    return [predictions, cost];
}

function backwardPropagation(predictions, xTrain, yTrain) {
    const m = xTrain.length;

    let dW = 0;
    let dB = 0;

    for (let i = 0; i < m; i++) {
        dW += (yTrain[i] - predictions[i]) * xTrain[i];
        dB += yTrain[i] - predictions[i];
    }
    dW /= m;
    dB /= m;
    return [dW, dB]
}

function trainModel({ model, epochs, alpha, xTrain, yTrain }) {
    const costHistory = [];
    for (let epoch = 0; epoch < epochs; epoch++) {
        const [predictions, cost] = forwardPropagation(model, xTrain, yTrain);

        // console.log('P', predictions, cost);
        costHistory.push(cost);


        const [dB, dW] = backwardPropagation(predictions, xTrain, yTrain);
        nanoNeuron.w += alpha * dW;
        nanoNeuron.b += alpha * dB;

    }
    return costHistory;
}

const w = Math.random();
const b = Math.random();
console.log(w, b);
const nanoNeuron = new NanoNeuron(w, b);

const [xTrain, yTrain, xTest, yTest] = generateDataSets();

const epochs = 70000;
const alpha = 0.0005;
const trainingCostHistory = trainModel({ model: nanoNeuron, epochs, alpha, xTrain, yTrain });
console.log(trainingCostHistory)
console.log('Cost before training: ', trainingCostHistory[0]);
console.log('Cost after training: ', trainingCostHistory[epochs - 1]);

console.log('Nanoneuron parameters: ', { w: nanoNeuron.w, b: nanoNeuron.b });

const [testPredictions, testCost] = forwardPropagation(nanoNeuron, xTest, yTest);

console.log('Cost on new testing data:', testCost);

const tempInCelcius = 70;
const customPrediction = nanoNeuron.predict(tempInCelcius);
console.log(`Nanoneuron "thinks" that ${tempInCelcius}C in Farenheit is:`, customPrediction);
console.log('Correct answer is:', celciusToFarenheit(tempInCelcius));