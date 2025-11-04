import { defineType } from "sanity";

export default defineType({
  name: "jobPosition",
  title: "Job Position",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Engineering", value: "engineering" },
          { title: "Design", value: "design" },
          { title: "Product", value: "product" },
          { title: "Marketing", value: "marketing" },
          { title: "Sales", value: "sales" },
          { title: "Operations", value: "operations" },
          { title: "Human Resources", value: "hr" },
          { title: "Finance", value: "finance" },
          { title: "Customer Support", value: "support" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "remote" },
          { title: "Lagos", value: "lagos" },
          { title: "Abuja", value: "abuja" },
          { title: "Port Harcourt", value: "port-harcourt" },
          { title: "On-site", value: "on-site" },
          { title: "Hybrid", value: "hybrid" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
          { title: "Freelance", value: "freelance" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "experienceLevel",
      title: "Experience Level",
      type: "string",
      options: {
        list: [
          { title: "Entry Level", value: "entry" },
          { title: "Mid Level", value: "mid" },
          { title: "Senior Level", value: "senior" },
          { title: "Lead", value: "lead" },
          { title: "Executive", value: "executive" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "benefits",
      title: "Benefits & Perks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "salaryRange",
      title: "Salary Range",
      type: "object",
      fields: [
        {
          name: "min",
          title: "Minimum Salary",
          type: "number",
        },
        {
          name: "max",
          title: "Maximum Salary",
          type: "number",
        },
        {
          name: "currency",
          title: "Currency",
          type: "string",
          initialValue: "NGN",
        },
        {
          name: "period",
          title: "Period",
          type: "string",
          options: {
            list: [
              { title: "Monthly", value: "monthly" },
              { title: "Yearly", value: "yearly" },
            ],
          },
          initialValue: "monthly",
        },
      ],
    },
    {
      name: "applicationUrl",
      title: "Application URL",
      type: "url",
      description: "External application link or email",
    },
    {
      name: "applicationEmail",
      title: "Application Email",
      type: "email",
      description: "Email for job applications",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Whether this position is currently open for applications",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured Position",
      type: "boolean",
      description: "Highlight this position as featured",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "expiresAt",
      title: "Application Deadline",
      type: "datetime",
      description: "When applications for this position close",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Skills, technologies, or other relevant tags",
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      department: "department",
      location: "location",
      employmentType: "employmentType",
      isActive: "isActive",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { title, department, location, employmentType, isActive, publishedAt } = selection;
      const status = isActive ? "🟢 Active" : "🔴 Inactive";
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : "No date";
      
      return {
        title: title || "Untitled Position",
        subtitle: `${department || "No department"} • ${location || "No location"} • ${employmentType || "No type"} • ${status} • ${date}`,
        media: () => "💼",
      };
    },
  },
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date (Oldest First)",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      title: "Department",
      name: "departmentAsc",
      by: [{ field: "department", direction: "asc" }],
    },
  ],
});
