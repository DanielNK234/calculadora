import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'olamundo';
  msg1: string = '';
  num : number = 0;
  public igual(){
    let posMsg = 0;
    if (this.msg1.includes('+')){
      posMsg = this.msg1.indexOf('+');

    }else if(this.msg1.includes('-')){
      posMsg = this.msg1.indexOf('-');

    }else if(this.msg1.includes('x')){
      posMsg = this.msg1.indexOf('x');

    }else if(this.msg1.includes('/')){
      posMsg = this.msg1.indexOf('/');
    }

    debugger
    let par1 = '';
    let par2 = '';
    par1 = this.msg1.substring(0, posMsg);
    let par1Int = parseInt(par1);
    par2 = this.msg1.substring(posMsg+1,this.msg1.length);
    let par2Int = parseInt(par2);

    if(this.msg1.includes('+')){
      this.msg1 = '';
      this.msg1 += par1Int+par2Int;

    }else if(this.msg1.includes('-')){
      this.msg1 = '';
      this.msg1 += par1Int-par2Int;

    }else if(this.msg1.includes("x")){
      this.msg1 = '';
      this.msg1 += par1Int*par2Int;

    }else if(this.msg1.includes("/")){
      this.msg1 = '';
      this.msg1 += par1Int/par2Int;
    }


  }
  public setNum(n: number){
    this.msg1 += n;

  }
  public menos(){
    this.msg1+="-";
  }
  public mais(){
    this.msg1+="+";
  }
  public multi(){
    this.msg1+="*";
  }
  public divs(){
    this.msg1+="/";
  }

}


