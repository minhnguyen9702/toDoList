import "./style.css"
import { initializeModal } from './modal';

initializeModal();

class Task {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate,
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getDesc() {
        return this.desc;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }
}

