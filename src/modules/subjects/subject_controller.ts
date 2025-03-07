import { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, getUsersFromSubject } from "./subject_service.js";
import express, {Request, Response } from 'express';

export const createSubjectHandler = async (req: Request, res: Response) => {
    try{
        const data = await createSubject(req.body);
        res.json(data);
    } catch(error: any){
        res.status(500).json({message: error.message});
    }
};

export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try{
        const data = await getAllSubjects();
        if (data.length === 0) {
            res.status(400).json({message: "No subjects found"});
        } else {
            res.json(data);
        }
    } catch(error: any){
        res.status(500).json({message: error.message});
    }
};

export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try{
        const data = await getSubjectById(req.params.id);
        res.json(data);
    } catch(error: any){
        res.status(500).json({message: error.message});
    }
};

export const updateSubjectHandler = async (req: Request, res: Response) => {
    try{
        const data = await updateSubject(req.params.id,req.body);
        res.json(data);
    } catch(error: any){
        res.status(500).json({message: error.message});
    }
};

export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try{
        const data = await deleteSubject(req.params.id);
        res.json(data);
    } catch(error: any){
        res.status(500).json({message: error.message});
    }
};

export const getUsersFromSubjectHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const users = await getUsersFromSubject(id);
        if (!users) {
            return res.status(404).json({ message: 'No subjects found' });
        }
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

