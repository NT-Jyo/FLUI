export interface Intro {
    picture:     string;
    description: string;
}

export interface SectionOne{
    content:        boolean,
    description:    string,
    link:           string,
    picture:        string,
    title:          string,
    video:          string,
}

export interface SectionTwo{
    content:        boolean,
    description:    string,
    link:           string,
    picture:        string,
    title:          string,
    video:          string,
}

export interface SectionThree{
    content:        boolean,
    description:    string,
    link:           string,
    picture:        string,
    title:          string,
    video:          string,
}

export interface SectionFour{
    content:        boolean,
    link1:          string,
    link2:          string,
    namelink1:      string,
    namelink2:      string,
    title:          string,
   
}

export interface SectionFive{
    question:       string,
}

export interface SolveQuestion{
    qualification:  number,
    question:       string,
    solveQuestion:  string,
    email:          string,
    date:           number,
    name:           string,
}

export interface Subject{
    comments:       number,
    likes:          number,
    nameSubject:    string,
    notlikes:       number,
    photoURL:       string,
    students:       number,
    themes:         number,

}