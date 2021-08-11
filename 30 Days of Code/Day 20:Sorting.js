function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    let count=0;
    // Write your code here
    for(let i=0;i<=n;i++){
        for(let j=0;j<n;j++){
            if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
                count++;
            }
        }
    }
    console.log('Array is sorted in '+count+' swaps.');
    console.log('First Element: '+a[0]);
    console.log('Last Element: '+a[n-1]);
}
