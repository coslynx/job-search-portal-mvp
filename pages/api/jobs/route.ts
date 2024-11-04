import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { getJobs } from "lib/api/client";
import { formatJob } from "lib/utils/formatters"; 

// Create a Supabase client (replace with your Supabase credentials)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { method } = req;
        switch (method) {
            case "GET":
                // Handle GET requests for job listings
                const { q, location } = req.query; // Fetch search parameters
                const jobs = await getJobs(q, location); // Fetch job listings from the database
                const formattedJobs = jobs.map((job) => formatJob(job)); // Format job data
                return res.status(200).json(formattedJobs); // Send a successful response
            default:
                return res.status(405).end("Method not allowed");
        }
    } catch (error) {
        // Handle API errors gracefully
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}