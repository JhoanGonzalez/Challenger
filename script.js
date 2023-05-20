    var texto = prompt();
    var encriptado;
    var desencriptado;

    function encriptar(texto){
        encriptado = [];
        for(var p = 0;p < texto.length;p++){
            if(texto[p] == "a"){
                encriptado = encriptado + "ai";
            }
            else {
                if(texto[p] == "e"){
                    encriptado = encriptado + "enter";
                }
                else{
                    if(texto[p] == "i"){
                        encriptado = encriptado + "imes";
                    }
                    else{
                        if(texto[p] == "o"){
                        encriptado = encriptado + "ober";
                        }
                        else{
                            if(texto[p] == "u"){
                            encriptado = encriptado + "ufat";
                            }
                            else{
                            encriptado = encriptado + texto[p];
                            }
                        }
                    }
                }
            }
        }
        return encriptado;
    }
    function desencriptador(texto){
        desencriptado = [];
        for(var p = 0;p < texto.length;p++){
            if(texto[p]=="a"){
                desencriptado = desencriptado + texto[p];
                p++;
            }
            else{
                if(texto[p] == "e"){
                    desencriptado = desencriptado + texto[p];
                    p = p + 4;
                }
                else{
                    if(texto[p]=="i"){
                        desencriptado = desencriptado + texto[p];
                        p = p + 3;
                    }
                    else{
                        if(texto[p]=="o"){
                            desencriptado = desencriptado + texto[p];
                            p = p + 3;
                        }
                        else{
                            if(texto[p]=="u"){
                                desencriptado = desencriptado + texto[p];
                                p = p + 3;
                            }
                            else{
                                desencriptado = desencriptado + texto[p];
                            }
                        }
                    }
                }
            }
        }
        return desencriptado;
    }
    
    encriptado = encriptar(texto);
    document.write(encriptado + "<br>");
    desencriptado = desencriptador(encriptado)
    document.write(desencriptado + "<br>");
    