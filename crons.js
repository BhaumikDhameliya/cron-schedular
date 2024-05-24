import { cancelJob, scheduleJob } from "node-schedule";
import fetch from "node-fetch";

const CronService = {
  scheduleCrons: () => {
    // schedule.scheduleJob('0 0 9 * * *', async () => {
    //     console.log(`>>>>>>> DAILY JOB CALLED >>>>>>> ${new Date()}`)
    //     console.log(`Fetching >>> ${process.env.DAILY_URL_CALL}`)
    //     try {
    //         const result = await fetch(process.env.DAILY_URL_CALL)
    //         console.log(`Fetch success >>> ${result.body}`)
    //     } catch (error) {
    //         console.log(`Fetch failed >>> ${error}`)
    //     }
    // });
    // schedule.scheduleJob('0 0 9 * * 7', async () => {
    //     console.log(`>>>>>>> Weekly JOB CALLED >>>>>>> ${new Date()}`)
    //     console.log(`Fetching >>> ${process.env.SITEMAP_URL_CALL}`)
    //     try {
    //         const result = await fetch(process.env.SITEMAP_URL_CALL)
    //         console.log(`Fetch success >>> ${result.body}`)
    //     } catch (error) {
    //         console.log(`Fetch failed >>> ${error}`)
    //     }
    // });
  },

  scheduleSingleCron: (url, datetime, jobId, isCanceled) => {
    console.log(">>>>>>>> SCHEDULING JOB : ");
    console.log({ url, datetime, jobId, isCanceled });
    cancelJob(String(jobId));
    if (isCanceled) {
      return;
    }
    scheduleJob(String(jobId), new Date(datetime), async () => {
      console.log(">>>>>>> SCHEDULED JOB CALLED >>>>>>>");
      console.log(`Fetching >>> ${url}`);
      try {
        const result = await fetch(url);
        console.log(`Fetch success >>> ${result.body}`);
      } catch (error) {
        console.log(`Fetch failed >>> ${error}`);
      }
    });
  },
};

export default CronService;
