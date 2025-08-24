package com.todoapp.backend;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getRecentIncompleteTasks() {
        return taskRepository.findTop5IncompleteTasks(PageRequest.of(0, 5));
    }

    public Task createTask(TaskDTO taskDTO) {
        Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setCompleted(false);
        return taskRepository.save(task);
    }

    public Task markAsCompleted(Long taskId) {
        Optional<Task> taskOptional = taskRepository.findById(taskId);
        if (taskOptional.isPresent()) {
            Task task = taskOptional.get();
            task.setCompleted(true);
            return taskRepository.save(task);
        } else {
            throw new RuntimeException("Task not found with id: " + taskId);
        }
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public Optional<Task> getTaskById(Long taskId) {
        return taskRepository.findById(taskId);
    }
}
