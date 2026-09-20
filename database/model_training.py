
import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

df = pd.read_csv(
    "career_recommendation_dataset_1000.csv"
)

print("Dataset loaded successfully")
print("Dataset shape:", df.shape)

y = df["target_career"]

drop_columns = [
    "profile_id",
    "full_name",
    "email",
    "target_career",
    "compare_career"
]
X = df.drop(columns=drop_columns)

X = pd.get_dummies(X)

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=100,
    stratify=y
)

print("Training records:", len(X_train))
print("Testing records:", len(X_test))

model = RandomForestClassifier(
    n_estimators=200,
    random_state=100
)

model.fit(X_train, y_train)

print("Model training completed")

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)

print("\nModel Accuracy:")
print(accuracy)

print("\nClassification Report:")
print(classification_report(y_test, y_pred))

model_data = {
    "model": model,
    "feature_columns": X.columns.tolist()
}

joblib.dump(
    model_data,
    "career_model.pkl"
)

print("\nModel saved successfully as career_model.pkl")

from google.colab import files

files.download("career_model.pkl")

import joblib

model_data = joblib.load("career_model.pkl")

model = model_data["model"]
feature_columns = model_data["feature_columns"]

print("Model loaded successfully!")
print(type(model))

print(model)

sample_user = df.iloc[[0]].copy()

actual_career = sample_user["target_career"].iloc[0]

sample_user = sample_user.drop(
    columns=[
        "profile_id",
        "full_name",
        "email",
        "target_career",
        "compare_career"
    ]
)

sample_user = pd.get_dummies(sample_user)

sample_user = sample_user.reindex(
    columns=X.columns,
    fill_value=0
)

predicted_career = model.predict(sample_user)[0]

print("Actual Career:", actual_career)
print("Predicted Career:", predicted_career)

import pandas as pd

requirements = pd.read_csv("career_requirements.csv")

print("Second dataset loaded successfully!")
display(requirements.head())

career_info = requirements[
    requirements["career"] == predicted_career
]

display(career_info)

import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
# Get career names
labels = sorted(y_test.unique())
# Create confusion matrix
cm = confusion_matrix(y_test, y_pred, labels=labels)
# Convert to percentages
cm_percentage = cm.astype(float) / cm.sum(axis=1, keepdims=True) * 80
# Create graph
fig, ax = plt.subplots(figsize=(11, 8))

disp = ConfusionMatrixDisplay(
    confusion_matrix=cm_percentage,
    display_labels=labels
)

disp.plot(
    ax=ax,
    values_format=".1f",
    xticks_rotation=45,
    colorbar=True
)

plt.title(
    "Actual vs Predicted Career - Confusion Matrix",
    fontsize=18,
    pad=20
)

plt.xlabel("Predicted Career", fontsize=14)
plt.ylabel("Actual Career", fontsize=14)

plt.xticks(fontsize=10)
plt.yticks(fontsize=10)

plt.tight_layout()
plt.show()