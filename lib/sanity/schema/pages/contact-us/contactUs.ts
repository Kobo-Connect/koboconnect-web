import { defineType } from "sanity";

export default defineType({
    name: "contactUsPage",
    title: "Contact Us Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Page Title",
            type: "string",
            initialValue: "Contact Us",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            initialValue: { current: "contact-us" },
            validation: (Rule) => Rule.required(),
        },

        {
            name: "heroSection",
            title: "Hero Section",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Hero Title",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "subtitle",
                    title: "Hero Subtitle",
                    type: "text",
                    rows: 3,
                },
                {
                    name: "description",
                    title: "Hero Description",
                    type: "text",
                    rows: 3,
                },
                {
                    name: "backgroundImage",
                    title: "Background Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative Text",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    validation: (Rule) => Rule.required(),
                },
            ],
        },

        {
            name: "mapImage",
            title: "Map Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    validation: (Rule) => Rule.required(),
                },
            ],
            validation: (Rule) => Rule.required(),
        },

        {
            name: "contactOptions",
            title: "Contact Options",
            type: "array",
            of: [
                {
                    name: "contactOption",
                    title: "Contact Option",
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "content",
                            title: "Content",
                            type: "text",
                            rows: 3,
                        },
                        {
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "action",
                            title: "Action",
                            type: "object",
                            fields: [
                                {
                                    name: "label",
                                    title: "Label",
                                    type: "string",
                                    validation: (Rule) => Rule.required(),
                                },
                                {
                                    name: "url",
                                    title: "URL",
                                    type: "string",
                                    validation: (Rule) => Rule.required(),
                                },
                            ],
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
    ],
});


