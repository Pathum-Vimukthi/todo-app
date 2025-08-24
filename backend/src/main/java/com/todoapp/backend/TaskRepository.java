package com.todoapp.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query("SELECT t FROM Task t WHERE t.completed = false ORDER BY t.createdAt DESC")
    List<Task> findTop5IncompleteTasks(Pageable pageable);

    List<Task> findByCompletedFalseOrderByCreatedAtDesc();
}
