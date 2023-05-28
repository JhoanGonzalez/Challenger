    const texto = document.querySelector(".texto");
    const mensaje = document.querySelector(".mensaje");

    function btmEncriptar(){
        const textEncriptado = encriptar(texto.value);
        mensaje.value = textEncriptado;
        texto.value = "";
        mensaje.style.backgroundImage = "none";
    }
    function btmDesencriptar(){
        const textDesencriptado = desencriptador(texto.value);
        mensaje.value = textDesencriptado;
        texto.value = "";
    }
    function btmCopiar(){
        texto.value = mensaje.value;
    }
    function encriptar(texto){
        encriptado = [];
        texto = texto.toLowerCase();
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
        texto = texto.toLowerCase();
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
    function check(e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) {
            return true;
        }
        patron = /[a-z]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }