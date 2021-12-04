function getNum() {
    return Math.floor(Math.random() * 10)+1;
}


// class NumPicker extends React.Component {
//     render() {
//         const num=getNum()
//         let msg;
//         if(num===7) msg="GooD!"
//         else msg="Bad"
//         return (
//          <div>
//               <h1>My number is: { num }</h1> 
//               <p>{num===7 ? 'Congrats': "Sorry, Unlucky!" }</p>
//               { msg }
//               { num===7 ? <img src="#" /> : null}
//         </div>
//         )
//     }
// }


class NumPicker extends React.Component {
    render() {
        const num=getNum()
        let msg;
        if(num===7) {
            msg= 
            <div>
                <h2>Congrats it's 7. You are lucky!</h2>
                <img src="#" />
            </div>
        }
        else {
            msg="Sorry, You are Unlucky!"
        } 
        return (
         <div>
              <h1>My number is: { num }</h1> 
              {/* <p>{num===7 ? 'Congrats': "Sorry, Unlucky!" }</p> */}
              { msg }
              {/* { num===7 ? <img src="#" /> : null} */}
        </div>
        )
    }
}



ReactDOM.render(<NumPicker />, document.getElementById('root'));

// If we use getNum in ternary Operator we get wrong output. So define variable outside return and use it 

// We can even use && for Image Popup, num===7 && <img src= /> so that we need not use NULL.