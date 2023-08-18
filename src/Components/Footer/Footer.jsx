import './Footer.css'
export function Footer({list}){
    // if(!list.length) return;
    const items=list.length;
    
    const itemDone = list.filter((item) => item.isDone).length;
    const donePer= Math.round(itemDone/items*100);

    return(
  <div className='Footer'>
     {!items?
     (<h3>Time to sync🔄 your To-do's,get it done☑️</h3>) : 
     (donePer<100)?
     (<h3>You're having {items} in Sync list.you already completed {itemDone}({donePer}%).</h3> ): 
     (<h3>🤩Yay! you have done everything🌟</h3>)
     }      
     
     
  </div>
  )
}