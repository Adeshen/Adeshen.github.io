---
title: MIT6.824学习笔记
author: adeshen
date: 2023-10-11 10:41:00 -0500
categories: [Distribution, Course]
tags: [distribution,course]
---
go的协程可以通过注解的方法式选定特定的协程进行任务发布

# 00 MapReduce论文阅读

[rfeet.qrk (mit.edu)](https://pdos.csail.mit.edu/6.824/papers/mapreduce.pdf)

## 词汇

- commodity machine：是指那些广泛可用、成本相对较低、没有特定定制的计算机硬件。这些机器往往是标准化的，可以从多家供应商那里购买，而不是特制或专为某种特定应用而设计。
- crawled document: 爬虫文档信息
- conspire to：共同导致
- obscure : 掩盖
- messy detail: 混乱的细节

The issues of how to parallelize the computation, distribute the data, and handle
failures conspire to obscure the original simple computation with large amounts of complex code to deal with
these issues.
