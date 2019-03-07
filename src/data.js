'use strict';

window.kantodex = {
//Función para filtrar por tipo:
    filterData: (data, setCondition) => {

        let filteredData = data.filter((element) => {
            for (let i = 0; i < element.type.length; i++) {
                if (element.type[i] === setCondition) {
                    return element;
                }
            }
        });
        
        return filteredData;
    },
//Función para ordenar por nombre 
    sortData:(data) => {

        data.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        return data;
    },

 
//Función para calcular promedio de dulces
    computeStats:(filteredData)=>{
        let sumCandies= 0;
        let valueCandies=0;
        let averageCandies =0;
        let getCandies = filteredData.map(element=> 
            element.candy_count);
        
             getCandies.forEach((element) => {
                if(element=== undefined){
                
                valueCandies=0;
            }  else {
                valueCandies=element;
            }        
            
            sumCandies+=valueCandies;
            });
            
            averageCandies= Math.floor(sumCandies/filteredData.length);
            return averageCandies;

             
        
    },
};

