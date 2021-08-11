function main() {
    const n = parseInt(readLine().trim(), 10);
    console.log(Math.max.apply(null, n.toString(2).split("0").map(x => x.length)));
}
