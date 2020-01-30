import { Component, OnInit } from '@angular/core';
import { Observable,fromEvent, interval} from 'rxjs';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-randome',
  templateUrl: './randome.component.html',
  styleUrls: ['./randome.component.css']
})
export class RandomeComponent implements OnInit {

  NumberG:number=0
  NumberRandome:number=0

  $observableG: Observable<Event>;
  $observableP: Observable<Event>;
  $observableE: Observable<Event>;

  NumberEssay:number=0;
  NumberValide:number=0;

  $obsJeu: Observable<any>;  

  constructor(public toastr:ToastrService) 
  {    
      this.NumberG=parseInt(10*Math.random()+"") 
      this.NumberRandome=parseInt(10*Math.random()+"")
  }

  ngOnInit() 
  {    
    const eltG = document.getElementById('G');
    this.$observableG= fromEvent(eltG, 'click');
    
    this.$observableG.subscribe(
      s => 
      {        
        this.CompareG();
      }
    );

    const eltP = document.getElementById('P');
    this.$observableP= fromEvent(eltP, 'click');
    this.$observableP.subscribe(
      s => 
      {
        this.CompareP();
      }
    );

    const eltE = document.getElementById('E');
    this.$observableE= fromEvent(eltE, 'click');
    this.$observableE.subscribe(
      s => 
      {
        this.CompareE(); 
      }
    );
  }

  DisableButtons()
  {
    const Button1 = <HTMLButtonElement> <unknown> document.getElementById("G");
    const Button2 = <HTMLButtonElement> <unknown> document.getElementById("P");
    const Button3 = <HTMLButtonElement> <unknown> document.getElementById("E");
    
    Button1.disabled=true;
    Button2.disabled=true;
    Button3.disabled=true;    
  }

  CompareG()
  {
    if(this.NumberG>this.NumberRandome)
    {
      this.toastr.success("Bonne Reponse","");            
      this.NumberValide++;   
      this.NumberEssay++          
    }
    else
    {
      this.toastr.error("Fausse Reponse","");        
      this.NumberEssay++    
    }  
    
    this.CompareJeu();
  
  }

  CompareP()
  {
    if(this.NumberG<this.NumberRandome)
    {
      this.toastr.success("Reponse Correct","");            
      this.NumberValide++;
      this.NumberEssay++
    }

    else
    {
      this.toastr.error("Fausse Reponse","");        
      this.NumberEssay++    
    }

    this.CompareJeu();

  }

  CompareE()
  {
    if(this.NumberG==this.NumberRandome)
    {
      this.toastr.success("Reponse Correct","");            
      this.NumberValide++;
      this.NumberEssay++;      
    } 
    
    else
    {
      this.toastr.error("Fausse Reponse","");  
      this.NumberEssay++;
    }

    this.CompareJeu();

  }

  CompareJeu()
  {
    if(this.NumberValide==5)
    {
      this.toastr.success("Vous avez gagner","Genial , Vous Pouvez Reesayer");  
      this.DisableButtons()

      this.$obsJeu = interval(1000)
      
      this.$obsJeu.subscribe(s => {
        window.location.reload();
      })              
    }

    else
    {
      if(this.NumberEssay==10)
      {
        this.toastr.error("Vous avez Perdu","Dommage , Vous Pouvez Reesayer");  
        this.DisableButtons()

        this.$obsJeu = interval(1000)
        
        this.$obsJeu.subscribe(s => {
          window.location.reload();
        })              
      }

      else
      {
        this.NumberG=parseInt(10*Math.random()+"")
        this.NumberRandome=parseInt(10*Math.random()+"")
      }

    }
  }

}


