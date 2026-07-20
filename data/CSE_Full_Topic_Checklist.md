# CSE — Complete Study Checklist (Every Topic & Subtopic)

*Tick these off as you cover them. This follows the official 10-section syllabus structure exactly, expanded down to the subtopic level — including items that haven't appeared in your 2024–2026 papers but are still fair game for full marks. Nothing here is optional if the goal is a perfect score.*

---

## Section 1: Engineering Mathematics

### Discrete Mathematics
- [ ] Propositional logic — connectives, truth tables, tautology, contradiction, satisfiability
- [ ] Logical equivalences — De Morgan's, distributive, absorption, implication rewriting
- [ ] First-order logic — quantifiers (∀, ∃), quantifier negation, well-formed formulas
- [ ] Validity, satisfiability, and logical entailment
- [ ] Sets — operations (union, intersection, complement, difference), cardinality, power set, Venn diagrams, inclusion-exclusion
- [ ] Relations — reflexive, symmetric, transitive, antisymmetric properties; representing relations as matrices/graphs
- [ ] Equivalence relations and partitions
- [ ] Partial orders (posets) — comparability, Hasse diagrams, minimal/maximal/least/greatest elements
- [ ] Lattices — join, meet, distributive lattices, complemented lattices, Boolean lattices
- [ ] Functions — injective, surjective, bijective; composition of functions; invertibility
- [ ] Monoids — closure, associativity, identity element
- [ ] Groups — group axioms, subgroups, cyclic groups, order of an element/group, Lagrange's theorem
- [ ] Graphs — degree, walk/path/cycle, connected vs disconnected, directed vs undirected
- [ ] Graph connectivity — cut vertices, bridges, strongly/weakly connected components
- [ ] Matching — bipartite matching, maximum matching, perfect matching
- [ ] Graph coloring — chromatic number, bipartite ⟺ 2-colorable, edge coloring
- [ ] Trees — properties (n vertices, n−1 edges), spanning trees, counting spanning trees (Cayley's formula)
- [ ] Minimum spanning trees — uniqueness conditions, effect of weight transformations
- [ ] Planar graphs — Euler's formula (V−E+F=2)
- [ ] Combinatorics — permutations, combinations, permutations with repetition, circular permutations
- [ ] Pigeonhole principle
- [ ] Inclusion-exclusion principle (counting applications)
- [ ] Recurrence relations — setting up, solving via characteristic equation, substitution/expansion method
- [ ] Generating functions — basic setup and use in counting
- [ ] Catalan numbers and their combinatorial applications

### Linear Algebra
- [ ] Matrix operations — addition, multiplication, transpose, properties
- [ ] Special matrices — symmetric, skew-symmetric, orthogonal, idempotent, diagonal, triangular, identity
- [ ] Determinants — computation, cofactor expansion, properties (det(AB), det(kA), det(A⁻¹), row-swap effect)
- [ ] Matrix rank — computation, rank-nullity theorem
- [ ] Systems of linear equations — Gaussian elimination, consistency conditions (unique/infinite/no solution)
- [ ] Eigenvalues and eigenvectors — characteristic equation, computation
- [ ] Eigenvalue properties — sum = trace, product = determinant, eigenvalues of Aᵏ/A⁻¹/polynomial in A
- [ ] Diagonalization of matrices
- [ ] LU decomposition — computing L and U, using it to solve Ax=b
- [ ] Vector spaces — subspaces, basis, dimension, linear independence
- [ ] Orthogonality — orthonormal sets, orthogonal matrices

### Calculus
- [ ] Limits — standard limits, L'Hôpital's rule
- [ ] Continuity — definition, checking continuity at a point, piecewise functions
- [ ] Differentiability — definition, relation between continuity and differentiability
- [ ] Derivatives — power/product/quotient/chain rule
- [ ] Maxima and minima — critical points, first derivative test, second derivative test
- [ ] Mean Value Theorem
- [ ] Rolle's Theorem
- [ ] Integration — basic rules, definite integrals, area interpretation
- [ ] Integration techniques — substitution method, integration by parts (basic applications)

### Probability and Statistics
- [ ] Sample space, events, axioms of probability
- [ ] Addition rule — P(A∪B), mutually exclusive events
- [ ] Conditional probability
- [ ] Independence of events
- [ ] Bayes' theorem — statement and application (disease testing, urn problems, etc.)
- [ ] Random variables — discrete and continuous
- [ ] PMF, PDF, CDF — definitions and relationships
- [ ] Expectation — E[X], linearity of expectation
- [ ] Variance and standard deviation — Var(X), Var(aX+b)
- [ ] Uniform distribution — PDF, mean, variance
- [ ] Normal distribution — PDF, standardization (z-score), symmetry properties
- [ ] Exponential distribution — PDF, mean, variance, memorylessness
- [ ] Poisson distribution — PMF, mean = variance = λ
- [ ] Binomial distribution — PMF, mean, variance
- [ ] Mean, median, mode of a data sample
- [ ] Standard deviation computed directly from a data sample

---

## Section 2: Digital Logic

- [ ] Number systems — binary, octal, decimal, hexadecimal conversions
- [ ] Signed number representation — sign-magnitude, 1's complement, 2's complement (range, arithmetic)
- [ ] Fixed-point number representation
- [ ] Floating-point representation — IEEE-754 single precision (1+8+23), double precision (1+11+52)
- [ ] Binary arithmetic — addition, subtraction, overflow detection
- [ ] Booth's algorithm for signed multiplication
- [ ] Boolean algebra — laws and identities (commutative, associative, distributive, absorption, De Morgan's)
- [ ] Canonical forms — Sum of Products (SOP), Product of Sums (POS), minterms, maxterms
- [ ] Minimization techniques — Karnaugh maps (up to 4–5 variables)
- [ ] Logic gates — AND, OR, NOT, NAND, NOR, XOR, XNOR; universal gate implementations
- [ ] Combinational circuits — half adder, full adder, subtractors
- [ ] Combinational circuits — multiplexers, demultiplexers
- [ ] Combinational circuits — encoders, decoders
- [ ] Sequential circuits — latches vs flip-flops
- [ ] Flip-flops — SR, D, JK, T; characteristic equations; excitation tables
- [ ] Counters — synchronous vs asynchronous (ripple), mod-n counters, up/down counters
- [ ] Shift registers
- [ ] State diagrams and state tables for sequential circuit design
- [ ] Race conditions and timing hazards (conceptual)

---

## Section 3: Computer Organization and Architecture

- [ ] Machine instructions — instruction formats, opcode/operand fields
- [ ] Addressing modes — immediate, direct, indirect, register, register-indirect, indexed
- [ ] ALU design basics — arithmetic and logic operation execution
- [ ] Data path design
- [ ] Control unit — hardwired control vs microprogrammed control
- [ ] Instruction cycle — fetch, decode, execute stages
- [ ] Instruction pipelining — pipeline stages (IF/ID/EX/MEM/WB), pipeline diagrams
- [ ] Pipeline hazards — structural hazards
- [ ] Pipeline hazards — data hazards (RAW, WAR, WAW) and resolution
- [ ] Pipeline hazards — control hazards and branch handling
- [ ] Pipeline performance — speedup calculation, throughput with/without stalls
- [ ] Memory hierarchy — registers → cache → main memory → secondary storage
- [ ] Cache memory — mapping techniques (direct-mapped, fully associative, set-associative)
- [ ] Cache memory — replacement policies (LRU, FIFO, random)
- [ ] Cache memory — write policies (write-through, write-back)
- [ ] Cache performance — hit ratio, miss ratio, Average Memory Access Time (AMAT)
- [ ] Multi-level cache hierarchies — combined AMAT computation
- [ ] Main memory organization and addressing
- [ ] Secondary storage — disk structure (platters, tracks, sectors, cylinders)
- [ ] Disk performance — seek time, rotational latency, transfer time
- [ ] I/O interfacing — programmed I/O, interrupt-driven I/O
- [ ] DMA — cycle-stealing mode vs burst/block mode
- [ ] Interrupt handling — vectored vs non-vectored interrupts, interrupt priority

---

## Section 4: Programming and Data Structures

### Programming in C
- [ ] Variables, data types, type conversion
- [ ] Operators and expressions — precedence, associativity
- [ ] Control structures — if/else, loops (for, while, do-while), switch
- [ ] Functions — declaration, definition, parameter passing (by value, by reference via pointers)
- [ ] Pointers — pointer arithmetic, pointer-to-pointer, function pointers, pointer/array relationship
- [ ] Arrays — 1D, 2D/multi-dimensional, dynamic memory allocation (malloc/calloc)
- [ ] Strings — string handling, common pitfalls (null-termination, buffer issues)
- [ ] Structures and unions
- [ ] Storage classes and scope — automatic, static, global; stack vs heap allocation
- [ ] Output/trace-prediction of nested loops and function calls

### Recursion
- [ ] Recursion basics — base case, recursive case
- [ ] Tracing recursive calls (recursion trees)
- [ ] Tail recursion vs non-tail recursion

### Data Structures
- [ ] Arrays — operations and complexity
- [ ] Stacks — array/linked-list implementation, push/pop, applications (expression evaluation, backtracking)
- [ ] Queues — simple queue, circular queue, priority queue, deque
- [ ] Linked lists — singly, doubly, circular; insertion, deletion, traversal, reversal
- [ ] Trees — terminology (root, leaf, height, depth)
- [ ] Tree traversals — inorder, preorder, postorder, level-order
- [ ] Binary Search Trees — insertion, deletion, search; height bounds; construction from insertion order
- [ ] Balanced trees — AVL tree rotations (conceptual)
- [ ] B-trees and B+ trees — structure, node occupancy rules (overlaps with Databases)
- [ ] Binary heaps — min-heap, max-heap, heapify, build-heap, heap sort, array representation (parent/child index formulas)
- [ ] Priority queue implementation via heaps
- [ ] Graphs — adjacency matrix representation, adjacency list representation, trade-offs

### Hashing
- [ ] Hash functions — design considerations
- [ ] Collision resolution — chaining
- [ ] Collision resolution — open addressing (linear probing, quadratic probing, double hashing)
- [ ] Load factor and its effect on performance

---

## Section 5: Algorithms

- [ ] Asymptotic notation — Big-O, Big-Ω, Big-Θ formal definitions
- [ ] Time complexity analysis of code/pseudocode
- [ ] Space complexity analysis
- [ ] Solving recurrences — substitution method, recursion-tree method, Master theorem
- [ ] Searching — linear search, binary search (and variants)
- [ ] Sorting — bubble sort, insertion sort, selection sort (mechanics + complexity)
- [ ] Sorting — merge sort, quick sort (mechanics, pivot behavior, worst-case triggers)
- [ ] Sorting — heap sort
- [ ] Sorting — counting sort, radix sort (linear-time sorting)
- [ ] Hashing — complexity aspects of hash-based search (overlaps with Section 4)
- [ ] Algorithm design — greedy technique (activity selection, Huffman coding, fractional knapsack)
- [ ] Algorithm design — dynamic programming (0/1 knapsack, longest common subsequence, matrix chain multiplication, edit distance)
- [ ] Algorithm design — divide and conquer (merge sort, quick sort, binary search as examples)
- [ ] Graph traversal — BFS (mechanics, applications, complexity)
- [ ] Graph traversal — DFS (mechanics, discovery/finish times, edge classification, applications)
- [ ] Minimum Spanning Tree — Kruskal's algorithm (Union-Find based)
- [ ] Minimum Spanning Tree — Prim's algorithm
- [ ] Shortest paths — Dijkstra's algorithm (single-source, non-negative weights)
- [ ] Shortest paths — Bellman-Ford algorithm (handles negative weights, cycle detection)
- [ ] Shortest paths — Floyd-Warshall algorithm (all-pairs)
- [ ] Shortest paths on DAGs (topological-sort-based, linear time)
- [ ] Topological sorting
- [ ] Vertex cover, matching, and their relationship (graph-algorithmic view)
- [ ] NP-completeness — P vs NP vs NP-hard vs NP-complete definitions
- [ ] Polynomial-time reductions (conceptual understanding)

---

## Section 6: Theory of Computation

- [ ] Regular expressions — construction, equivalence to finite automata
- [ ] Deterministic Finite Automata (DFA) — construction, simulation
- [ ] Non-deterministic Finite Automata (NFA) — construction, ε-transitions
- [ ] NFA to DFA conversion — subset construction, worst-case state blow-up
- [ ] DFA minimization
- [ ] Regular language closure properties — union, intersection, complement, concatenation, Kleene star, reversal
- [ ] Pumping lemma for regular languages — statement and use in proving non-regularity
- [ ] Context-free grammars — derivations (leftmost/rightmost), parse trees
- [ ] Ambiguity in grammars — identifying and resolving (dangling-else, operator precedence)
- [ ] Chomsky Normal Form — conversion process, derivation-length properties
- [ ] Pushdown automata — construction, equivalence to context-free languages
- [ ] Deterministic vs non-deterministic PDA — expressive power difference
- [ ] Context-free language closure properties — union, concatenation, Kleene star (and non-closure under intersection/complement)
- [ ] Pumping lemma for context-free languages
- [ ] Turing machines — construction for simple languages, transition function design
- [ ] Recursive and recursively enumerable languages — definitions and distinctions
- [ ] Decidability — decidable vs undecidable problems
- [ ] Halting problem and its undecidability (conceptual understanding)
- [ ] Chomsky hierarchy — Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursively Enumerable

---

## Section 7: Compiler Design

- [ ] Lexical analysis — role of a lexer, token definitions via regular expressions
- [ ] Symbol table — structure, responsibilities (scope tracking, type info)
- [ ] Parsing — top-down vs bottom-up classification
- [ ] Top-down parsing — LL(1) parsers, predictive parsing
- [ ] FIRST and FOLLOW set computation
- [ ] LL(1) parsing table construction
- [ ] Bottom-up parsing — shift-reduce parsing
- [ ] LR family — LR(0), SLR(1), LALR(1), CLR(1) — item sets, parsing table construction, power hierarchy
- [ ] Grammar transformations — left recursion elimination, left factoring
- [ ] Syntax-directed translation — attribute grammars, synthesized attributes, inherited attributes
- [ ] Runtime environments — activation records, stack frames, static/dynamic scoping
- [ ] Intermediate code generation — three-address code, quadruples
- [ ] Syntax trees / abstract syntax trees
- [ ] Backpatching — for Boolean expressions and control-flow statement code generation
- [ ] Local code optimization techniques
- [ ] Data flow analysis — constant propagation
- [ ] Data flow analysis — liveness analysis
- [ ] Data flow analysis — common subexpression elimination
- [ ] Control-flow graphs — construction and use in optimization

---

## Section 8: Operating System

- [ ] System calls — role and examples (fork, exec, wait, exit)
- [ ] Process concept — process states, Process Control Block (PCB)
- [ ] Process state transitions — valid vs invalid transitions
- [ ] Threads — user-level vs kernel-level threads, multithreading models
- [ ] Inter-process communication — pipes, shared memory, message passing
- [ ] Concurrency and synchronization — critical section problem, requirements for a solution
- [ ] Synchronization primitives — semaphores (binary and counting), mutex locks, monitors
- [ ] Classical synchronization problems — producer-consumer, readers-writers, dining philosophers
- [ ] Deadlock — four necessary conditions (mutual exclusion, hold-and-wait, no preemption, circular wait)
- [ ] Deadlock prevention techniques
- [ ] Deadlock avoidance — Banker's algorithm (full safety-check simulation with Available/Max/Allocation/Need)
- [ ] Deadlock detection and recovery
- [ ] CPU scheduling — FCFS, SJF (preemptive/non-preemptive), Round Robin, Priority scheduling
- [ ] Scheduling performance metrics — turnaround time, waiting time, response time computation
- [ ] Multi-processor scheduling basics
- [ ] Disk/I/O scheduling — FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK algorithms
- [ ] Memory management — contiguous allocation, partitioning (fixed/variable), fragmentation (internal/external)
- [ ] Paging — page tables, address translation, page table entry structure
- [ ] Multi-level paging — address bit-splitting across levels
- [ ] Translation Lookaside Buffer (TLB) — hit/miss, TLB reach
- [ ] Segmentation — segment tables, comparison with paging
- [ ] Virtual memory — demand paging concept
- [ ] Page replacement algorithms — FIFO, LRU, Optimal (OPT)
- [ ] Belady's anomaly
- [ ] Thrashing — causes and effects
- [ ] File systems — file allocation methods (contiguous, linked, indexed)
- [ ] Directory structures
- [ ] Free space management — bitmaps vs linked lists

---

## Section 9: Databases

- [ ] ER model — entities, attributes (simple, composite, multi-valued, derived)
- [ ] ER model — relationships, cardinality constraints, participation constraints (total/partial)
- [ ] Weak entity sets — identifying owner, total participation requirement
- [ ] ER-to-relational mapping
- [ ] Relational model — keys (super key, candidate key, primary key, foreign key)
- [ ] Attribute closure computation and candidate key derivation
- [ ] Relational algebra — selection, projection, union, set difference, Cartesian product
- [ ] Relational algebra — join types (natural join, theta join, equi-join, outer joins)
- [ ] Relational algebra — division operator
- [ ] Tuple relational calculus — declarative query specification
- [ ] SQL — DDL (CREATE, ALTER, DROP)
- [ ] SQL — DML (SELECT, INSERT, UPDATE, DELETE)
- [ ] SQL — nested and correlated subqueries
- [ ] SQL — aggregate functions, GROUP BY, HAVING vs WHERE
- [ ] SQL — joins in query form, multi-table queries
- [ ] Integrity constraints — entity integrity, referential integrity, domain constraints
- [ ] Functional dependencies — Armstrong's axioms (reflexivity, augmentation, transitivity)
- [ ] Functional dependencies — derived rules (union, decomposition, pseudotransitivity)
- [ ] "Useful" functional dependency conditions
- [ ] Normalization — 1NF (atomicity)
- [ ] Normalization — 2NF (no partial dependency)
- [ ] Normalization — 3NF (no transitive dependency)
- [ ] Normalization — BCNF (every determinant is a candidate key) — isolated from 3NF
- [ ] Decomposition properties — lossless-join decomposition
- [ ] Decomposition properties — dependency-preserving decomposition
- [ ] Multivalued dependencies and 4NF (conceptual)
- [ ] File organization — heap/unordered files, sequential/sorted files, hashed files
- [ ] Indexing — primary index, secondary index
- [ ] Indexing — dense vs sparse index, clustering vs non-clustering index
- [ ] B-tree and B+ tree indexing — structure, node occupancy, height
- [ ] Transactions — ACID properties (Atomicity, Consistency, Isolation, Durability)
- [ ] Concurrency control — locking protocols, Two-Phase Locking (2PL)
- [ ] Concurrency control — timestamp ordering (conceptual)
- [ ] Serializability — conflict serializability, precedence graph construction and cycle detection
- [ ] Deadlock handling in transaction processing
- [ ] Recovery basics — log-based recovery (conceptual)

---

## Section 10: Computer Networks

- [ ] Layering concept — OSI model (7 layers) and their functions
- [ ] Layering concept — TCP/IP protocol stack and mapping to OSI
- [ ] Switching — circuit switching, packet switching, virtual-circuit switching
- [ ] Data link layer — framing techniques
- [ ] Error detection — parity bits, checksum, CRC
- [ ] Medium Access Control — CSMA/CD, CSMA/CA
- [ ] Ethernet — frame format, basics of bridging
- [ ] Sliding window protocols — Go-Back-N, Selective Repeat; window size bounds
- [ ] Routing — shortest path routing, flooding
- [ ] Routing protocols — distance vector routing (Bellman-Ford based), count-to-infinity problem
- [ ] Routing protocols — link state routing (Dijkstra based)
- [ ] Fragmentation — IPv4 fragmentation rules, reassembly
- [ ] IP addressing — IPv4 address classes, CIDR notation, subnetting/supernetting
- [ ] Longest-prefix-match routing table lookups
- [ ] IP support protocols — ARP (address resolution), DHCP (dynamic host configuration), ICMP
- [ ] Network Address Translation (NAT) — header field modifications
- [ ] Transport layer — UDP characteristics (connectionless, unreliable)
- [ ] Transport layer — TCP characteristics (connection-oriented, reliable)
- [ ] TCP connection management — 3-way handshake, connection termination
- [ ] Flow control — sliding window based flow control
- [ ] Congestion control — slow start, congestion avoidance, threshold (ssthresh) behavior after timeout
- [ ] Sockets — basic concept of socket programming
- [ ] Application layer — DNS (domain name resolution)
- [ ] Application layer — SMTP, Email protocols
- [ ] Application layer — HTTP (including persistent connections in HTTP 1.1)
- [ ] Application layer — FTP

---

## General Aptitude (15 marks — common to all exam papers)

### Verbal Ability
- [ ] Vocabulary — synonyms, antonyms
- [ ] Grammar — articles, tenses, prepositions, subject-verb agreement
- [ ] Sentence completion / fill-in-the-blanks
- [ ] Reading comprehension
- [ ] Verbal analogies

### Quantitative Aptitude
- [ ] Percentages, profit and loss
- [ ] Simple interest and compound interest
- [ ] Ratio and proportion
- [ ] Averages
- [ ] Time, speed, and distance
- [ ] Time and work
- [ ] Permutations and combinations
- [ ] Basic probability
- [ ] Number system properties (divisibility, primes, LCM/HCF)
- [ ] Logarithm identities and equation-solving
- [ ] Sequences and series (arithmetic/geometric progressions)
- [ ] Mensuration and basic geometry
- [ ] Data interpretation — tables, bar charts, pie charts

### Analytical Aptitude
- [ ] Logical deduction from given statements
- [ ] Syllogisms
- [ ] Blood relations
- [ ] Clocks and calendars
- [ ] Seating arrangement puzzles
- [ ] Critical reasoning (statement-conclusion/assumption)

### Spatial Aptitude
- [ ] Pattern/tile-based figure construction
- [ ] Paper folding and unfolding
- [ ] Dice and cube visualization
- [ ] 3D structure inference from 2D views (front/top/side)
- [ ] Symmetry-based figure completion
- [ ] Grid-based logical/visual puzzles

---

## How to use this checklist

1. Go section by section in the official syllabus order above — it matches how the exam paper itself is structured (Engineering Math and Digital Logic questions often appear early, mixed with everything else).
2. Check off a subtopic only once you can (a) explain it from scratch and (b) solve a problem on it without looking anything up.
3. Cross-reference against your **formula sheet** for the exact formulas tied to each subtopic, and against your **priority tiers** (Section 1, 3, 5 core areas are highest weight) to decide how deep to go on each item under time pressure.
4. Items with no PYQ history in your 2024–2026 papers (Bayes' theorem, Pumping Lemma, Banker's algorithm full simulation, BCNF isolated from 3NF, NP-completeness reductions, runtime environments) are still on this list on purpose — a checklist for full marks can't skip syllabus-legitimate topics just because they haven't shown up yet.
5. Revisit this checklist cold (no notes) 2–3 weeks before the exam — anything you can't immediately recall goes back into active revision.


