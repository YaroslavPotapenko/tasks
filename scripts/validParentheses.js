function validParentheses(parens){
        
    for (let i = parens.length / 2; i >= 0; i--) {
        parens = parens.replace('()', '');
    }
    return parens == '';
} // console.log(validParentheses( "(())()()()()()((()))()()()()()()()" ));