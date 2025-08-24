import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, CheckCircle2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// URL da API
const API_URL = "https://localhost:7181/api/Tasks";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      toast({
        title: "Error",
        description: "Could not load tasks. Please check if the server is running.",
        variant: "destructive",
      });
    }
  };

  const createTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setLoading(true);
    try {
      await axios.post(API_URL, { title: newTask });
      setNewTask("");
      fetchTasks();
      toast({
        title: "Success!",
        description: "Task created successfully.",
      });
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      toast({
        title: "Error",
        description: "Could not create task.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (task: Task) => {
    try {
      await axios.put(`${API_URL}/${task.id}`, {
        title: task.title,
        isCompleted: !task.isCompleted,
      });
      fetchTasks();
      toast({
        title: task.isCompleted ? "Task reopened" : "Task completed!",
        description: `"${task.title}" was ${task.isCompleted ? 'reopened' : 'marked as completed'}.`,
      });
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      toast({
        title: "Error",
        description: "Could not update task.",
        variant: "destructive",
      });
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
      toast({
        title: "Task removed",
        description: "The task was removed successfully.",
      });
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      toast({
        title: "Error",
        description: "Could not remove task.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const completedTasks = tasks.filter(t => t.isCompleted).length;
  const pendingTasks = tasks.filter(t => !t.isCompleted).length;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-hero to-accent bg-clip-text text-transparent">
              🎯 TaskFlow Manager
            </CardTitle>
            <p className="text-muted-foreground">Organize your tasks simply and efficiently</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={createTask} className="flex gap-2 mb-6">
              <Input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task..."
                className="flex-1"
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !newTask.trim()} variant="hero">
                {loading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <Plus className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <Plus className="h-4 w-4 mr-2" />
                )}
                {loading ? "Creating..." : "Add"}
              </Button>
            </form>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{tasks.length}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-accent">{completedTasks}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Completed
                </div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{pendingTasks}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Clock className="h-3 w-3" />
                  Pending
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              {tasks.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4 animate-bounce-gentle">📝</div>
                  <p className="text-muted-foreground text-lg">
                    No tasks yet. How about adding one? 😊
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {tasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`p-4 transition-all duration-200 hover:shadow-md ${
                        task.isCompleted ? 'bg-muted/50' : 'hover:bg-muted/30'
                      }`}>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={task.isCompleted}
                            onCheckedChange={() => toggleTask(task)}
                            className="h-5 w-5"
                          />
                          
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${
                              task.isCompleted 
                                ? 'line-through text-muted-foreground' 
                                : 'text-foreground'
                            }`}>
                              {task.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(task.createdAt).toLocaleDateString("pt-BR", {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>

                          <Button
                            onClick={() => deleteTask(task.id)}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default TaskList;