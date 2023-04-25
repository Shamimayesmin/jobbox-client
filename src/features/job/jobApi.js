import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
        postJob : builder.mutation({
            query : (data) =>({
                url : "/job",
                method : "POST",
                body : data,
            }),
            invalidatesTags : ["Jobs"]
        }),
        applyJob : builder.mutation({
            query : (data) =>({
                url : "/apply",
                method : "PATCH",
                body : data,
            }),
            
        }),
        getJobs : builder.query({
            query : () =>({              
                url : "/jobs",
              
            }),
            providesTags : ["Jobs"],
        }),
        jobById : builder.query({
            query : (id) =>({
                url : `/job/${id}`,    
            }),
        }),
    }),
});

export const {usePostJobMutation,useGetJobsQuery, useJobByIdQuery, useApplyJobMutation} = jobApi;