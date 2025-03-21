

function CommonFormElement({currentItem,value,onChange}) {
    
    let content = null;

    switch(currentItem.componentType){
        case 'input':
            content = (
                <input
                name={currentItem.name}
                id={currentItem.name}
                placeholder={currentItem.placeholder}
                value={value || ""}
                onChange={onChange}
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
                onChange={onChange}
                />  
            );    
    }

    return content
}

export default CommonFormElement;