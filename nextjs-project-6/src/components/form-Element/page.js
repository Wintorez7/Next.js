

function CommonFormElement() {
    
    let content = null;

    switch(currentItem.componentType,value,onChange){
        case 'input':
            content = (
                <input
                name={currentItem.name}
                id={currentItem.name}
                placeholder={currentItem.placeholder}
                value={value}
                onChange={onchange}
                />  
            );
            
            break;
        
        default:
            content = (
                <input
                name={currentItem.name}
                id={currentItem.name}
                placeholder={currentItem.placeholder}
                value={value}
                onChange={onchange}
                />  
            );    
    }

    return 
}

export default CommonFormElement;