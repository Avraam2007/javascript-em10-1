import { getFormText1, getBigData } from "./text_base.js"
import { getValue } from "./script.js"

class modalWindow{
    #modal=document.createElement('div');
    #modal_parent=document.createElement('div');
    #modal_block=document.createElement('div');
    #modal_close=document.createElement('div');
    #modal_body=document.createElement('div');
    constructor(text){
      this.#modal.appendChild(this.#modal_parent);
      this.#modal.appendChild(this.#modal_block);
      this.#modal_block.appendChild(this.#modal_close);
      this.#modal_block.appendChild(this.#modal_body);
      
      this.#modal_parent.onclick=this.#modal_close.onclick=this.close.bind(this);
      this.#modal_parent.style='position:fixed;top:0;left:0;with:100%;height:100%;min-height:'+document.documentElement.scrollWidth+'px;min-width:'+document.documentElement.scrollWidth+'px;opacity:0.55;background-color:black;z-index:90;';
      this.#modal_close.innerHTML='&#10006;';
      this.#modal_close.style='padding:0;position:absolute;width: 20px;height:20px;right:20px;cursor:pointer;font-size:15px;line-height:0;font:20px Arial;text-align:center;text-shadow: 0px 0px 4px black;';
      this.#modal_block.setAttribute('class', 'login');
      this.#modal_block.style='width:96%;max-width:450px;min-height:90px;border-radius:10px;position: fixed;top:50%;left:50%;transform: translate(-50%, -50%);box-shadow: 0px 0px 12px 0px black;z-index:99;';
      this.#modal_body.style='padding:2%;overflow-y:auto;';
      if(text)this.#modal_body.innerText=text;
    }
    get innerText(){
      return this.#modal_body.innerText;
    }
    set innerText(value){
      this.#modal_body.innerText=value;
    }
    get innerHTML(){
      return this.#modal_body.innerHTML;
    }
    set innerHTML(value){
      this.#modal_body.innerHTML=value;
    }
    show(){
      document.body.appendChild(this.#modal);
    //анімація
    this.#modal_block.animate([{opacity:0},
   {opacity:1}],500);
    }
    close(){
      document.body.removeChild(this.#modal);
    }
  }

  function showWindow(innerHTML) {
    var m=new modalWindow('Enter your data');
    m.innerHTML = innerHTML;
    m.show();  
}

export function showLoginWindow() {
    const text = getFormText1();
    showWindow(text);

    const form = document.getElementById('form-1');
    form.onsubmit = e => {
        e.preventDefault();

        if (getBigData().find((item)=>item.email == getValue('email-type-1')) == undefined) {
            alert('Sorry, we didn`t find your data. Please, try to sign in and try again');
        }
        else if (getBigData().find((item)=>item.password == getValue('password-type-1')) == undefined) {
            alert('The password isn`t correct. Please, try again');
        }
        else {
            const findData = getBigData().find((item)=>item.email == getValue('email-type-1'));
            alert(`Hello, ${findData.first_name} ${findData.last_name}!`)
        }
        return false;
    }; 
}