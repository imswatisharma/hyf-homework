//arrayOfStudents is a global letiable
const arrayOfStudents = [];

//Test cases
addStudents();
addStudents("");
addStudents("Queen");
addStudents("Tom");
addStudents("Jerry");
addStudents("Donald");
addStudents("Mickey");
addStudents("Shrek");
addStudents("Jerry");
addStudents("Tom");
addStudents("Queen");
addStudents("Pluto");
addStudents("Garfield");


function addStudents(studentName) {
// Verifying that studentName is not null and not empty
	if (studentName && studentName.length > 0) {
		//Duplicate check first
		let alreadyExists = false;
		for (i=0; i<arrayOfStudents.length; i++) {
				if (arrayOfStudents[i].trim() === studentName.trim()) {
					//The student is already in the class
					alreadyExists = true;
				}
			}
        
			if (alreadyExists) {
				console.log('This student already exists in the class: ' + studentName + '');
			} else {
				//Verifying if there doesn't already exist 6 students in the array
				if (arrayOfStudents.length < 6) {
					//Since everything is ok, add the student
					arrayOfStudents.push(studentName);
				} else {
					//There are already 6 students in the array. Checking if the input is Queen
					if (studentName.trim() === "Queen") {
						console.log('Adding Queen to the class');
						arrayOfStudents.push(studentName);
					} else {
						console.log('Already 6 students in the class. Also, the new student '+ studentName + ' is not The Queen');
					}
				}
			}
			console.log('The students in the class are: ' + arrayOfStudents + '');

	} else {
		console.log('studentName cannot be Null or Empty');
	}
}
