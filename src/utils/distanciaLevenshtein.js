
export function distanciaLeveshtein (str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const len1 = str1.length;
    const len2 = str2.length;

    const matriz = [];

    for (let i = 0; i <= len1; i++) {
       matriz[i] = [i]; 
    }

    for(let j = 0; j <= len2; j++) {
        matriz[0][j] = j
    }

    for(let i = 1; i <= len1; i++){
        for(let j = 1; j <= len2; j++){
            if(str1[i-1] === str2[j -1]){
                matriz[i][j] = matriz[i-1][j-1]
            }
            else{
                matriz[i][j] = Math.min(
                    matriz[1-1][j] + 1,
                    matriz[i][j - 1] + 1,
                    matriz[i - 1][j - 1] + 1
                )
            }
        }
    }

    return matriz[len1][len2];
}