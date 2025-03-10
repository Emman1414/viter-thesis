---
tags:
- sentence-transformers
- sentence-similarity
- feature-extraction
- generated_from_trainer
- dataset_size:7492
- loss:CosineSimilarityLoss
base_model: sentence-transformers/all-MiniLM-L6-v2
widget:
- source_sentence: How long does it take to screen my blood before donation?
  sentences:
  - I’m here to help! Are you looking for blood donation details?
  - No, you must wait at least one month after completing your antibiotic treatment.
  - Yes, as blood contains fluids. Drink plenty of water before and after donation
    to stay hydrated.
- source_sentence: Does using medication make me ineligible to donate blood?
  sentences:
  - Yes, but it is recommended to avoid smoking for a few hours before and after donation.
  - O-negative blood is precious because it is universally compatible and can be used
    in emergency situations when there is no time to match blood types.
  - No, your blood type does not affect how often you can donate, but certain blood
    types may be in higher demand, which can influence how often blood centers request
    donations from those types.
- source_sentence: Are there any special guidelines for first-time donors?
  sentences:
  - Yes, if you have type AB blood, you can donate blood, but you can only donate
    to other AB-type recipients.
  - First-time donors should stay hydrated, eat before donating, and rest afterward
    to prevent dizziness.
  - Many cancer treatments destroy blood cells, making transfusions necessary to help
    patients recover and fight infections.
- source_sentence: Is it safe for people with diabetes to donate blood?
  sentences:
  - Yes, as long as your blood sugar levels are stable and you have no related complications,
    it is safe to donate.
  - Of course! What specific details would you like to know?
  - Teenagers may be required to undergo a brief medical check-up before donating
    blood to ensure they meet health standards.
- source_sentence: How can I book my blood donation appointment through the website?
  sentences:
  - At 16 years old, you may be eligible to donate blood with parental consent.
  - We provide medical aid, emotional support, and emergency relief items to those
    impacted.
  - We can help set up your appointment. Let us know your preferred date and time.
pipeline_tag: sentence-similarity
library_name: sentence-transformers
metrics:
- pearson_cosine
- spearman_cosine
model-index:
- name: SentenceTransformer based on sentence-transformers/all-MiniLM-L6-v2
  results:
  - task:
      type: semantic-similarity
      name: Semantic Similarity
    dataset:
      name: faq evaluator
      type: faq-evaluator
    metrics:
    - type: pearson_cosine
      value: 0.9218467919936629
      name: Pearson Cosine
    - type: spearman_cosine
      value: 0.8498200058790184
      name: Spearman Cosine
---

# SentenceTransformer based on sentence-transformers/all-MiniLM-L6-v2

This is a [sentence-transformers](https://www.SBERT.net) model finetuned from [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). It maps sentences & paragraphs to a 384-dimensional dense vector space and can be used for semantic textual similarity, semantic search, paraphrase mining, text classification, clustering, and more.

## Model Details

### Model Description
- **Model Type:** Sentence Transformer
- **Base model:** [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) <!-- at revision fa97f6e7cb1a59073dff9e6b13e2715cf7475ac9 -->
- **Maximum Sequence Length:** 256 tokens
- **Output Dimensionality:** 384 dimensions
- **Similarity Function:** Cosine Similarity
<!-- - **Training Dataset:** Unknown -->
<!-- - **Language:** Unknown -->
<!-- - **License:** Unknown -->

### Model Sources

- **Documentation:** [Sentence Transformers Documentation](https://sbert.net)
- **Repository:** [Sentence Transformers on GitHub](https://github.com/UKPLab/sentence-transformers)
- **Hugging Face:** [Sentence Transformers on Hugging Face](https://huggingface.co/models?library=sentence-transformers)

### Full Model Architecture

```
SentenceTransformer(
  (0): Transformer({'max_seq_length': 256, 'do_lower_case': False}) with Transformer model: BertModel 
  (1): Pooling({'word_embedding_dimension': 384, 'pooling_mode_cls_token': False, 'pooling_mode_mean_tokens': True, 'pooling_mode_max_tokens': False, 'pooling_mode_mean_sqrt_len_tokens': False, 'pooling_mode_weightedmean_tokens': False, 'pooling_mode_lasttoken': False, 'include_prompt': True})
  (2): Normalize()
)
```

## Usage

### Direct Usage (Sentence Transformers)

First install the Sentence Transformers library:

```bash
pip install -U sentence-transformers
```

Then you can load this model and run inference.
```python
from sentence_transformers import SentenceTransformer

# Download from the 🤗 Hub
model = SentenceTransformer("sentence_transformers_model_id")
# Run inference
sentences = [
    'How can I book my blood donation appointment through the website?',
    'We can help set up your appointment. Let us know your preferred date and time.',
    'At 16 years old, you may be eligible to donate blood with parental consent.',
]
embeddings = model.encode(sentences)
print(embeddings.shape)
# [3, 384]

# Get the similarity scores for the embeddings
similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [3, 3]
```

<!--
### Direct Usage (Transformers)

<details><summary>Click to see the direct usage in Transformers</summary>

</details>
-->

<!--
### Downstream Usage (Sentence Transformers)

You can finetune this model on your own dataset.

<details><summary>Click to expand</summary>

</details>
-->

<!--
### Out-of-Scope Use

*List how the model may foreseeably be misused and address what users ought not to do with the model.*
-->

## Evaluation

### Metrics

#### Semantic Similarity

* Dataset: `faq-evaluator`
* Evaluated with [<code>EmbeddingSimilarityEvaluator</code>](https://sbert.net/docs/package_reference/sentence_transformer/evaluation.html#sentence_transformers.evaluation.EmbeddingSimilarityEvaluator)

| Metric              | Value      |
|:--------------------|:-----------|
| pearson_cosine      | 0.9218     |
| **spearman_cosine** | **0.8498** |

<!--
## Bias, Risks and Limitations

*What are the known or foreseeable issues stemming from this model? You could also flag here known failure cases or weaknesses of the model.*
-->

<!--
### Recommendations

*What are recommendations with respect to the foreseeable issues? For example, filtering explicit content.*
-->

## Training Details

### Training Dataset

#### Unnamed Dataset

* Size: 7,492 training samples
* Columns: <code>sentence_0</code>, <code>sentence_1</code>, and <code>label</code>
* Approximate statistics based on the first 1000 samples:
  |         | sentence_0                                                                        | sentence_1                                                                        | label                                                          |
  |:--------|:----------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:---------------------------------------------------------------|
  | type    | string                                                                            | string                                                                            | float                                                          |
  | details | <ul><li>min: 3 tokens</li><li>mean: 12.87 tokens</li><li>max: 24 tokens</li></ul> | <ul><li>min: 7 tokens</li><li>mean: 27.41 tokens</li><li>max: 63 tokens</li></ul> | <ul><li>min: 0.0</li><li>mean: 0.49</li><li>max: 1.0</li></ul> |
* Samples:
  | sentence_0                                                            | sentence_1                                                                                                                                                                                             | label            |
  |:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
  | <code>How do I schedule my blood donation appointment?</code>         | <code>Let us know your preferred date and time, and we will set an appointment for you.</code>                                                                                                         | <code>1.0</code> |
  | <code>Does heart health impact my eligibility to donate blood?</code> | <code>If you have had malaria, you may need to wait a certain period before being eligible to donate blood.</code>                                                                                     | <code>0.0</code> |
  | <code>Can I donate blood at different donation centers?</code>        | <code>If you had cancer as a child and have been in remission for a significant period, you may be eligible. However, eligibility depends on the type of cancer and your current health status.</code> | <code>0.0</code> |
* Loss: [<code>CosineSimilarityLoss</code>](https://sbert.net/docs/package_reference/sentence_transformer/losses.html#cosinesimilarityloss) with these parameters:
  ```json
  {
      "loss_fct": "torch.nn.modules.loss.MSELoss"
  }
  ```

### Training Hyperparameters
#### Non-Default Hyperparameters

- `eval_strategy`: steps
- `per_device_train_batch_size`: 16
- `per_device_eval_batch_size`: 16
- `num_train_epochs`: 6
- `multi_dataset_batch_sampler`: round_robin

#### All Hyperparameters
<details><summary>Click to expand</summary>

- `overwrite_output_dir`: False
- `do_predict`: False
- `eval_strategy`: steps
- `prediction_loss_only`: True
- `per_device_train_batch_size`: 16
- `per_device_eval_batch_size`: 16
- `per_gpu_train_batch_size`: None
- `per_gpu_eval_batch_size`: None
- `gradient_accumulation_steps`: 1
- `eval_accumulation_steps`: None
- `torch_empty_cache_steps`: None
- `learning_rate`: 5e-05
- `weight_decay`: 0.0
- `adam_beta1`: 0.9
- `adam_beta2`: 0.999
- `adam_epsilon`: 1e-08
- `max_grad_norm`: 1
- `num_train_epochs`: 6
- `max_steps`: -1
- `lr_scheduler_type`: linear
- `lr_scheduler_kwargs`: {}
- `warmup_ratio`: 0.0
- `warmup_steps`: 0
- `log_level`: passive
- `log_level_replica`: warning
- `log_on_each_node`: True
- `logging_nan_inf_filter`: True
- `save_safetensors`: True
- `save_on_each_node`: False
- `save_only_model`: False
- `restore_callback_states_from_checkpoint`: False
- `no_cuda`: False
- `use_cpu`: False
- `use_mps_device`: False
- `seed`: 42
- `data_seed`: None
- `jit_mode_eval`: False
- `use_ipex`: False
- `bf16`: False
- `fp16`: False
- `fp16_opt_level`: O1
- `half_precision_backend`: auto
- `bf16_full_eval`: False
- `fp16_full_eval`: False
- `tf32`: None
- `local_rank`: 0
- `ddp_backend`: None
- `tpu_num_cores`: None
- `tpu_metrics_debug`: False
- `debug`: []
- `dataloader_drop_last`: False
- `dataloader_num_workers`: 0
- `dataloader_prefetch_factor`: None
- `past_index`: -1
- `disable_tqdm`: False
- `remove_unused_columns`: True
- `label_names`: None
- `load_best_model_at_end`: False
- `ignore_data_skip`: False
- `fsdp`: []
- `fsdp_min_num_params`: 0
- `fsdp_config`: {'min_num_params': 0, 'xla': False, 'xla_fsdp_v2': False, 'xla_fsdp_grad_ckpt': False}
- `fsdp_transformer_layer_cls_to_wrap`: None
- `accelerator_config`: {'split_batches': False, 'dispatch_batches': None, 'even_batches': True, 'use_seedable_sampler': True, 'non_blocking': False, 'gradient_accumulation_kwargs': None}
- `deepspeed`: None
- `label_smoothing_factor`: 0.0
- `optim`: adamw_torch
- `optim_args`: None
- `adafactor`: False
- `group_by_length`: False
- `length_column_name`: length
- `ddp_find_unused_parameters`: None
- `ddp_bucket_cap_mb`: None
- `ddp_broadcast_buffers`: False
- `dataloader_pin_memory`: True
- `dataloader_persistent_workers`: False
- `skip_memory_metrics`: True
- `use_legacy_prediction_loop`: False
- `push_to_hub`: False
- `resume_from_checkpoint`: None
- `hub_model_id`: None
- `hub_strategy`: every_save
- `hub_private_repo`: None
- `hub_always_push`: False
- `gradient_checkpointing`: False
- `gradient_checkpointing_kwargs`: None
- `include_inputs_for_metrics`: False
- `include_for_metrics`: []
- `eval_do_concat_batches`: True
- `fp16_backend`: auto
- `push_to_hub_model_id`: None
- `push_to_hub_organization`: None
- `mp_parameters`: 
- `auto_find_batch_size`: False
- `full_determinism`: False
- `torchdynamo`: None
- `ray_scope`: last
- `ddp_timeout`: 1800
- `torch_compile`: False
- `torch_compile_backend`: None
- `torch_compile_mode`: None
- `dispatch_batches`: None
- `split_batches`: None
- `include_tokens_per_second`: False
- `include_num_input_tokens_seen`: False
- `neftune_noise_alpha`: None
- `optim_target_modules`: None
- `batch_eval_metrics`: False
- `eval_on_start`: False
- `use_liger_kernel`: False
- `eval_use_gather_object`: False
- `average_tokens_across_devices`: False
- `prompts`: None
- `batch_sampler`: batch_sampler
- `multi_dataset_batch_sampler`: round_robin

</details>

### Training Logs
| Epoch  | Step | Training Loss | faq-evaluator_spearman_cosine |
|:------:|:----:|:-------------:|:-----------------------------:|
| 0.2132 | 100  | -             | 0.8378                        |
| 0.4264 | 200  | -             | 0.8423                        |
| 0.6397 | 300  | -             | 0.8453                        |
| 0.8529 | 400  | -             | 0.8480                        |
| 1.0    | 469  | -             | 0.8457                        |
| 1.0661 | 500  | 0.0797        | 0.8466                        |
| 1.2793 | 600  | -             | 0.8480                        |
| 1.4925 | 700  | -             | 0.8483                        |
| 1.7058 | 800  | -             | 0.8468                        |
| 1.9190 | 900  | -             | 0.8487                        |
| 2.0    | 938  | -             | 0.8481                        |
| 2.1322 | 1000 | 0.042         | 0.8482                        |
| 2.3454 | 1100 | -             | 0.8488                        |
| 2.5586 | 1200 | -             | 0.8492                        |
| 2.7719 | 1300 | -             | 0.8487                        |
| 2.9851 | 1400 | -             | 0.8483                        |
| 3.0    | 1407 | -             | 0.8480                        |
| 3.1983 | 1500 | 0.0329        | 0.8486                        |
| 3.4115 | 1600 | -             | 0.8494                        |
| 3.6247 | 1700 | -             | 0.8498                        |


### Framework Versions
- Python: 3.11.11
- Sentence Transformers: 3.4.1
- Transformers: 4.48.3
- PyTorch: 2.5.1+cu124
- Accelerate: 1.3.0
- Datasets: 3.3.1
- Tokenizers: 0.21.0

## Citation

### BibTeX

#### Sentence Transformers
```bibtex
@inproceedings{reimers-2019-sentence-bert,
    title = "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks",
    author = "Reimers, Nils and Gurevych, Iryna",
    booktitle = "Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing",
    month = "11",
    year = "2019",
    publisher = "Association for Computational Linguistics",
    url = "https://arxiv.org/abs/1908.10084",
}
```

<!--
## Glossary

*Clearly define terms in order to be accessible across audiences.*
-->

<!--
## Model Card Authors

*Lists the people who create the model card, providing recognition and accountability for the detailed work that goes into its construction.*
-->

<!--
## Model Card Contact

*Provides a way for people who have updates to the Model Card, suggestions, or questions, to contact the Model Card authors.*
-->