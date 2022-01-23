export interface Subjects {
    themes:      number;
    comments:    number;
    notlikes:    number;
    students:    number;
    likes:       number;
    photoURL:    string;
    nameSubject: string;
}

export interface Topics {
    date: number;
    idTopic:  string,
    name: string;
}

export interface Phrase{
    sentence:string,
    uid:string,
}