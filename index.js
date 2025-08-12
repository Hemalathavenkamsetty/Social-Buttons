const Button = props => {
  const {className,buttonText} = props
  return <button className = {`${className}`>{buttonText}</button>
}
const Element = ( 
  <div>
    <h1>Social Buttons</h1>
     <div className = 'buttonContainer'>
     <Button buttonText = 'Lick-button'/>
     <Button buttonText ='Comment' className = 'common-button'/>
     <Button buttonText ='Share' className = 'share-button'/>
     </div>
  </div> 

reactDOM.render(element,document.getElementById('root')) 

  
