alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert(!ture); //False
alert(!false); //True