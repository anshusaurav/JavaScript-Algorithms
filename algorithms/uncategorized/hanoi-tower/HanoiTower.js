function hanoiTowerRecursive({ nDiscs, iPole, mPole, fPole, }) {
    if (nDiscs === 1) {
        const disc = iPole.pop();
        fPole.push(disc);
    } else {
        hanoiTowerRecursive({
            nDiscs: nDiscs - 1,
            iPole,
            mPole: fPole,
            fPole: mPole,
        });
    }
    hanoiTowerRecursive({
        nDiscs: 1, iPole, mPole, tPole
    });
    hanoiTowerRecursive({
        nDiscs: nDiscs - 1, iPole: mPole, mPole: fPole, fPole
    })
}

function hanoiTower({
    nDiscs,
    iPole = new Stack(),
    mPole = new Stack(),
    fPole = new Stack()
}) {
    for (let size = nDiscs; size >= 0; size--) {
        hanoiTowerRecursive({ nDiscs, iPole, mPole, fPole });
    }
}