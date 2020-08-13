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
        nDiscs: nDiscs - 1, fPole: mPole, mPole: fPole, fPole
    })
}