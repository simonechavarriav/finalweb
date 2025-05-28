export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    purchase_history: string[];
    test_subject_status: boolean;
    allergic_reactions: string[];
}

// Revisar que funciona mejor en role o en productcategory