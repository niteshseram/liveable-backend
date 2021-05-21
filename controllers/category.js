const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id, (err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found!",
      });
    }

    req.category = category;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save category!",
      });
    }

    return res.json(category);
  });
};

exports.getCategory = (req, res) => {
  return res.json(req.category);
};

exports.getAllCategory = (req, res) => {
  Category.find((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "No category available!",
      });
    }

    return res.json(categories);
  });
};

exports.updateCategory = (req, res) => {
  const category = req.category;

  category.name = req.body.name;

  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update category!",
      });
    }

    return res.json(updatedCategory);
  });
};

exports.deleteCategory = (req, res) => {
  const category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this category!",
      });
    }

    return res.json({
      message: `${category.name} successfully deleted!`,
    });
  });
};
