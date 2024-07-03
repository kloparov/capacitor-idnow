import { IDnow } from 'capacitor-idnow';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    IDnow.echo({ value: inputValue })
}
