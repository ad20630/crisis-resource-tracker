import { Router } from "express";
import prisma from "../config/db";

const router = Router();

// GET all resources
router.get("/", async (req, res) => {
  const resources = await prisma.resource.findMany();
  res.json(resources);
});

// POST new resource
router.post("/", async (req, res) => {
  try {
    const { name, type, lat, lng } = req.body;
    const newResource = await prisma.resource.create({
      data: { name, type, lat, lng },
    });
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ error: "Could not create resource" });
  }
});

export default router;