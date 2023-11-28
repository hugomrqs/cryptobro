// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// On déclare le contrat SimpleStorage qui permet de stocker et lire une donnée de type uint
contract SimpleStorage{
    // On déclare une variable d'état data qui contient la donnée stockée
    uint data;

    // On définit une fonction updateData qui prend en paramètre une valeur de type uint et qui met à jour la variable data avec cette valeur
    function updateData(uint _data)external{
        data = _data;
    }

    // On définit une fonction readData qui renvoie la valeur de la variable data
    function readData() external view returns(uint){
        return data;
    }
}
