import { Router } from "express";
import CronService from "./crons.js";
const router = Router();

router.post("/schedule", (req, res) => {
  try {
    const datetime = req.body.datetime;
    const url = req.body.url;
    const jobId = req.body.jobId;
    const isCanceled = req.body.isCanceled;
    CronService.scheduleSingleCron(url, datetime, jobId, isCanceled);
    res.send("JOB Scheduled");
  } catch (err) {
    console.log(`API Error >>> ${err}`);
    res.send(`API Error >>> ${err}`);
  }
});

export default router;
