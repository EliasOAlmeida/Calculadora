
function Calcular ( tipo, valor ) {
   
    document.getElementById ( 'resultado' ).style.color="#0a274b"


        if ( "acao" === tipo ) {
            
            
            switch ( valor ) {
                
                
                case 'c':

                    document.getElementById ( 'resultado' ).value = ''
                break;

                case '*':
                case '/':
                case '+':
                case "-":
                case ".":   

                     document.getElementById ( 'resultado' ).value += valor
                break;


                case '=':
                   var resultado_campo = eval ( document.getElementById ( 'resultado' ).value )
                   
                   document.getElementById ( 'resultado' ).value = resultado_campo
                break;

                
                default:
                    document.getElementById ( 'resultado' ).value = 'Error'
            }
        }




        else if ( "valor" === tipo ) {
      
            document.getElementById ( 'resultado' ).value += valor       
        }
}

