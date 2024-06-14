import express, { Request, Response } from 'express';
const { addItem, completeItem, clearItems } = require('./final-exam');

const app = express();
const port = 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const getTasks = (): any => {
  const { tasks = [] } = require('./final-exam');
  return tasks;
};

app.get('/', (req: Request, res: Response) => {
  const tasks = getTasks();
  res.render('index', { tasks: tasks });
});

app.get('/*', (req: Request, res: Response) => res.redirect('/'));

app.post('/', (req: Request, res: Response) => {
  const newTask: string = req.body.task;
  addItem && addItem(newTask);

  const tasks = getTasks();
  res.render('index', { tasks: tasks });
});

app.post('/delete', (req: Request, res: Response) => {
  completeItem && completeItem(req.body.id);

  const tasks = getTasks();
  res.render('index', { tasks: tasks });
});

app.post('/clear', (req: Request, res: Response) => {
  clearItems && clearItems();
  const tasks = getTasks();

  res.render('index', { tasks: tasks });
});

app.listen(port, () => console.log(`Application is running at http://localhost:${port} 🥳`));
