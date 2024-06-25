

export default function HijoPasos({pasos}){

    return (
        <div>
            <h2>Pasos:</h2>
      <ol>
        {pasos.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ol> 
        
        </div>
    );   




}

