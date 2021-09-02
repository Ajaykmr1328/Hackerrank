function timeConversion(s) {
    // Write your code here
    var hour=0,time=0,timeformatPM={},timeformatAM={}
    timeformatAM={
        '12': '00'
    }
    timeformatPM={
        '01' :'13',
        '02' :'14',
        '03' :'15',
        '04' :'16',
        '05' :'17',
        '06' :'18',
        '07' :'19',
        '08' :'20',
        '09' :'21',
        '10' :'22',
        '11' :'23',
        '12' :'12'
    }
    if('PM'==s.substring(s.length-2,s.length)){
        hour=timeformatPM[s.substring(0,2)]
    }
    else if('AM'==s.substring(s.length-2,s.length)&&12==s.substring(0,2)){
        hour=timeformatAM[s.substring(0,2)]
    }
    else{
        hour=s.substring(0,2)
    }
    time=(hour+s.substring(2,s.length-2))
    return time
}
