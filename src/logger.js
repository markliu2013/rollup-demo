export const log = msg => {
    console.log('---------- INFO ---------')
    console.log(msg)
    console.log('---------- END INFO ---------')
}

export const error = msg => {
    console.error('---------- ERROR ---------')
    console.error(msg)
    console.error('---------- END ERROR ---------')
}