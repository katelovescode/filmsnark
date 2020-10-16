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
      minItems: 13,
      maxItems: 50,
      items: {
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
          rating: {
            type: "integer",
            faker: {
              "random.number": { max: 125 },
            },
          },
          series: {
            type: "string",
            faker: {
              "random.arrayElement": [series],
            },
          },
          releaseDate: {
            type: "string",
            format: "date",
          },
          author: {
            type: "string",
            default: "Kate",
          },
          notableGrossness: {
            type: "string",
            faker: {
              "lorem.paragraphs": 2,
            },
          },
          summary: {
            type: "string",
            faker: {
              "lorem.sentences": 2,
            },
          },
        },
        required: ["id", "grade", "rating", "series", "notableGrossness"],
      },
    },
  },
  required: ["reviews"],
}

module.exports = schema
