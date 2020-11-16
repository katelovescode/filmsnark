const dayjs = require("dayjs")

let now = dayjs()

const grades = [
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
  "F+",
  "F",
  "F-",
]

const series = ["Disney Animated", "Star Trek", "Tim Burton"]

const schema = {
  type: "object",
  properties: {
    reviews: {
      type: "array",
      minItems: 8,
      maxItems: 12,
      items: {
        name: "review",
        type: "object",
        properties: {
          id: {
            type: "string",
            unique: true,
            faker: "random.uuid",
          },
          grade: {
            type: "string",
            faker: {
              "random.arrayElement": [grades],
            },
          },
          movieTitle: {
            type: "string",
            faker: {
              "lorem.words": 3,
            },
          },
          notableGrossness: {
            type: "string",
            faker: {
              "lorem.paragraphs": 2,
            },
          },
          posterImage: {
            type: "string",
            default: "https://picsum.photos/800",
          },
          publishDate: {
            type: "string",
            format: "date",
          },
          ranking: {
            type: "integer",
            faker: {
              "random.number": { max: 125 },
            },
          },
          releaseDate: {
            type: "string",
            format: "date",
          },
          reviewText: {
            type: "string",
            faker: {
              "lorem.paragraphs": 12,
            },
          },
          series: {
            type: "string",
            faker: {
              "random.arrayElement": [series],
            },
          },
          summary: {
            type: "string",
            faker: {
              "lorem.sentences": 2,
            },
          },
        },
        required: [
          "id",
          "grade",
          "movieTitle",
          "notableGrossness",
          "posterImage",
          "publishDate",
          "ranking",
          "releaseDate",
          "reviewText",
          "series",
          "summary",
        ],
      },
    },
    pages: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: {
        name: "page",
        type: "object",
        properties: {
          id: {
            type: "string",
            unique: true,
            faker: "random.uuid",
          },
          name: {
            type: "string",
            default: "About",
          },
          pageCalloutTitle: {
            type: "string",
            default: "Notable Grossness",
          },
          pageCalloutText: {
            type: "string",
            faker: {
              "lorem.paragraphs": 3,
            },
          },
          pageText: {
            type: "string",
            faker: {
              "lorem.paragraphs": 12,
            },
          },
        },
        required: ["id", "name", "pageText"],
      },
    },
  },
  required: ["reviews", "pages"],
}

module.exports = schema
