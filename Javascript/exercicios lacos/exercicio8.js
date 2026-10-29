for (let vel = 60; vel <= 100; vel+= 10) {
    if(vel <=80){
        console.log("Velocidade OK!");
    }else if(vel >80 && vel <=90){
            console.log("Multa Leve");
    }else if(vel >90 || vel ==100){
            console.log("Multa Grave");
    }
    
}