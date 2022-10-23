import { AppDataSource } from '../data-source'
import { Tasks } from '../entity/Tasks'
import { Request, Response } from 'express'


export const getTasks = async (request: Request, response: Response) => {
  const tasks = await AppDataSource.getRepository(Tasks).find()
  console.log("Localized successfully: ", tasks)
  return response.json(tasks)
}

export const getTaskById = async (request: Request, response: Response) => {
  const id = request.params
  const task = await AppDataSource.getTreeRepository(Tasks).findOneBy(id)
  return response.json(task)
}

export const saveTask = async (request: Request, response: Response) => {
  const task = await AppDataSource.getRepository(Tasks).save(request.body)
  return response.json(task)
}

export const updateTask = async (request: Request, response: Response) => {
  const id = request.params
  const task = await AppDataSource.getRepository(Tasks).update(id, request.body)
  if (task.affected === 1) {
    const taskUpdated = await AppDataSource.getRepository(Tasks).findOneBy(id)
    return response.json(taskUpdated)
  } else {
    return response.status(404).json({
      message: 'Task not found'
    })
  }
}

export const finishTask = async (request: Request, response: Response) => {
  const id = request.params
  const task = await AppDataSource.getRepository(Tasks).update(id, request.body)
  if (task.affected === 1) {
    const taskUpdated = await AppDataSource.getRepository(Tasks).findOneBy(id)
    return response.json({ message: "Task finished"})
  } else {
    return response.status(404).json({
      message: 'Task not found'
    })
  }
}

export const removeTask = async (request: Request, response: Response) => {
  const id = request.params
  const task = await AppDataSource.getRepository(Tasks).delete(id)
  if (task.affected === 1) {
    const taskUpdated = await AppDataSource.getRepository(Tasks).findOneBy(id)
    return response.json({ message: "Task removed"})
  } else {
    return response.status(404).json({
      message: 'Task not found'
    })
  }
}