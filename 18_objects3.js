// destructuring of objects
const course = {
    courseName: "as we rf",
    price: "999",
    courseInstructor: "aparna"
}
// course.courseName ab hr baar access krne ke liye itta 
// lamba likhna pdega
const {courseInstructor: instructor} = course //de-structuring
console.log(courseInstructor);
console.log(instructor);

// API JSON
// {
//     "name": "app",
//     "price1": "free"
// }