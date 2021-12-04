class Workout{
    constructor(n, s, r){
     this.reps = r
     this.sets = s  
     this.name = n 
    }
    describe(){
        return `Workout: ${this.name} Reps: ${this.reps} Sets: ${this.sets}`;
    }
}

class program {
    constructor(name){
        this.name = name;
        this.workouts = [];
    }

    addWorkout(workout){
       if (workout instanceof Workout){
         this.workouts.push(workout);  
    } else {
        throw new Error(`You can only add a workout. 
        Argument is not a workout: ${workout}`);
        }
    }
    describe() {
        return `${this.name} has ${this.workouts.length} workouts.`;
}

}
class Menu {
    constructor(){
        this.programs = [];
        this.selectedProgram = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.createProgram();
                    break;
                case '2':
                    this.viewProgram();
                    break;
                case'3':
                    this.deleteProgram();
                    break;
                case'4':
                    this.displayPrograms();
                    break;
                default:
                    selection = 0;
                
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new Program
        2) view Programs
        3) delete Program
        4) display Programs
        `);
    }
    showWorkoutMenuOptions(programInfo){
        return prompt(`
        0) back
        1) create workout
        2) delete workout
        ${programInfo};`)
    }
    displayPrograms(){
        let programString = '';
        for (let i = 0; i < this.programs.length; i++){
            programString += i + ')' + this.programs[i].name + '\n';
        }
        alert(programString);
    }
    createProgram(){
        let name = prompt('Enter Name for new Program');
        this.programs.push(new program(name));
    }
    viewProgram(){
        let index = prompt('Enter the index of the program you wish to view');
        if(index > -1 && index < this.programs.length){
            this.selectedProgram = this.programs[index];
            let description = 'Program Name: ' + this.selectedProgram.name + '\n';
            for (let i = 0; i < this.selectedProgram.workouts.length; i++){
                description += i + ') ' + this.selectedProgram.workouts[i].name + ' - ' +
                this.selectedProgram.workouts[i].sets + '  Sets ' + 
                this.selectedProgram.workouts[i].reps + ' Reps ' + '\n';
            }
            let selction = this.showWorkoutMenuOptions(description)
            switch(selction){
                case '1':
                    this.createWorkout();
                    break;
                case '2':
                    this.deleteWorkout();
                    break;
            }
   
        }
        
    }
    deleteProgram(){
            let index = prompt('Enter the index of the program you wish to delete: ');
            if (index > - 1 && index < this.teams.length){
                this.teams.splice(index, 1);
            }
        }
    deleteWorkout(){
            let index = prompt('Enter the index of the workout you wish to delete: ');
            if (index > -1 && index < this.workouts.length){
                this.workouts.splice(index, 1);
            }
      
}
    createWorkout(){
                let name = prompt('Enter name of the new workout');
                let reps = prompt('Enter the number of reps for the workout');
                let sets = prompt('Enter the number of sets for the workout');
                this.selectedProgram.workouts.push(new Workout(name, sets, reps));
                }

            }  




let menu = new Menu();
menu.start();

