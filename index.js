 let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
 let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
 let artSubjects = 'Government, Economics, Literature, History';
 let generalSubjects = 'English, Mathematics';

 let studentGroup = 'ART';
if(studentGroup === 'SCIENCE'){
     console.log(scienceSubjects + " " + generalSubjects)
 }else if(studentGroup === 'ART'){
     console.log(artSubjects + " " + generalSubjects)
 }else if(studentGroup === 'SOCIALSCIENCE'){
    console.log(socialSubjects + " " + generalSubjects)
 }else(
    console.log(generalSubjects)
 )