var documenterSearchIndex = {"docs":
[{"location":"#FASTX-1","page":"Home","title":"FASTX","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: Latest Release) (Image: MIT license)  (Image: Stable documentation) (Image: Latest documentation) (Image: Pkg Status) (Image: Chat)","category":"page"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"FASTX provides I/O and utilities for manipulating FASTA and FASTQ, formatted sequence data files.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"FASTX is made available to install through BioJulia's package registry.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Julia by default only watches the \"General\" package registry, so before you start, you should add the BioJulia package registry.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Start a julia terminal, hit the ] key to enter pkg mode (you should see the prompt change from julia> to pkg> ), then enter the following command:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"registry add https://github.com/BioJulia/BioJuliaRegistry.git","category":"page"},{"location":"#","page":"Home","title":"Home","text":"After you've added the registry, you can install FASTX from the julia REPL. Press ] to enter pkg mode again, and enter the following:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"add FASTX","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the master branch to try new features before release.","category":"page"},{"location":"#Testing-1","page":"Home","title":"Testing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"FASTX is tested against Julia 1.X on Linux, OS X, and Windows.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Latest build status:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Contributing-1","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Take a look at the contributing files detailed contributor and maintainer guidelines, and code of conduct.","category":"page"},{"location":"#Financial-contributions-1","page":"Home","title":"Financial contributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development of the community, it will be \"merged\" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.","category":"page"},{"location":"#Backers-and-Sponsors-1","page":"Home","title":"Backers & Sponsors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Thank you to all our backers and sponsors!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Love our work and community? Become a backer.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: backers)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project Your logo will show up here with a link to your website.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Questions?-1","page":"Home","title":"Questions?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you have a question about contributing or using BioJulia software, come on over and chat to us on Gitter, or you can try the Bio category of the Julia discourse site.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"CurrentModule = FASTX","category":"page"},{"location":"manual/fasta/#FASTA-formatted-files-1","page":"FASTA formatted files","title":"FASTA formatted files","text":"","category":"section"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"FASTA is a text-based file format for representing biological sequences. A FASTA file stores a list of sequence records with name, description, and sequence.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"The template of a sequence record is:","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":">{name} {description}?\n{sequence}","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"Here is an example of a chromosomal sequence:","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":">chrI chromosome 1\nCCACACCACACCCACACACCCACACACCACACCACACACCACACCACACC\nCACACACACACATCCTAACACTACCCTAACACAGCCCTAATCTAACCCTG","category":"page"},{"location":"manual/fasta/#Readers-and-Writers-1","page":"FASTA formatted files","title":"Readers and Writers","text":"","category":"section"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"The reader and writer for FASTA formatted files, are found within the FASTA submodule of FASTX.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"FASTA.Reader\nFASTA.Writer","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"They can be created with IOStreams.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"using FASTX\n\nr = FASTA.Reader(open(\"my-seqs.fasta\", \"r\"))\nw = FASTA.Writer(open(\"my-out.fasta\", \"w\"))","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"Alternatively, Base.open is overloaded with a method for conveinience:","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"r = open(FASTA.Reader, \"my-seqs.fasta\")\nw = open(FASTA.Writer, \"my-out.fasta\")","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"Usually sequence records will be read sequentially from a file by iteration.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"reader = open(FASTA.Reader, \"my-seqs.fasta\")\nfor record in reader\n    ## Do something\n    # like showing the identifiers\n    @show FASTA.identifier(record)\nend\nclose(reader)","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"You can also overwrite records in a while loop to avoid excessive memory allocation.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"reader = open(FASTA.Reader, \"my-seqs.fasta\")\nrecord = FASTA.Record()\nwhile !eof(reader)\n    read!(reader, record)\n    ## Do something.\nend","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"But if the FASTA file has an auxiliary index file formatted in fai, the reader supports random access to FASTA records, which would be useful when accessing specific parts of a huge genome sequence:","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"reader = open(FASTA.Reader, \"sacCer.fa\", index = \"sacCer.fa.fai\")\nchrIV = reader[\"chrIV\"]  # directly read sequences called chrIV.\nclose(reader)","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"Reading in a sequence from a FASTA formatted file will give you a variable of type FASTA.Record.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"Various getters and setters are available for FASTA.Records:","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"FASTA.hasidentifier\nFASTA.identifier\nFASTA.hasdescription\nFASTA.description\nFASTA.hassequence\nFASTA.sequence","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"To write a BioSequence to FASTA file, you first have to create a FASTA.Record:","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"using BioSequences\nx = dna\"aaaaatttttcccccggggg\"\nrec = FASTA.Record(\"MySeq\", x)\nw = open(FASTA.Writer, \"my-out.fasta\")\nwrite(w, rec)\nclose(w)","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"As always with julia IO types, remember to close your file readers and writer after you are finished.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"Using open with a do-block can help ensure you close a stream after you are finished.","category":"page"},{"location":"manual/fasta/#","page":"FASTA formatted files","title":"FASTA formatted files","text":"open(FASTA.Reader, \"my-reads.fasta\") do reader\n    for record in reader\n        ## Do something\n    end\nend","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"CurrentModule = FASTX","category":"page"},{"location":"manual/fastq/#FASTQ-formatted-files-1","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"","category":"section"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"FASTQ is a text-based file format for representing DNA sequences along with qualities for each base. A FASTQ file stores a list of sequence records in the following format:","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"@{name} {description}?\n{sequence}\n+\n{qualities}","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"Here is an example of one record from a FASTQ file:","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"@FSRRS4401BE7HA\ntcagTTAAGATGGGAT\n+\n###EEEEEEEEE##E#","category":"page"},{"location":"manual/fastq/#Readers-and-Writers-1","page":"FASTQ formatted files","title":"Readers and Writers","text":"","category":"section"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"The reader and writer for FASTQ formatted files, are found within the FASTQ module of FASTX.","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"FASTQ.Reader\nFASTQ.Writer","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"They can be created with IOStreams:","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"using FASTX\n\nr = FASTQ.Reader(open(\"my-reads.fastq\", \"r\"))\nw = FASTQ.Writer(open(\"my-output.fastq\", \"w\"))","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"Alternatively, Base.open is overloaded with a method for conveinience:","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"r = open(FASTQ.Reader, \"my-reads.fastq\")\nw = open(FASTQ.Writer, \"my-out.fastq\")","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"Note that FASTQ.Reader does not support line-wraps within sequence and quality. Usually sequence records will be read sequentially from a file by iteration.","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"reader = open(FASTQ.Reader, \"my-reads.fastq\")\nfor record in reader\n    ## Do something\nend\nclose(reader)","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"You can also overwrite records in a while loop to avoid excessive memory allocation.","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"reader = open(FASTQ.Reader, \"my-reads.fastq\")\nrecord = FASTQ.Record()\nwhile !eof(reader)\n    read!(reader, record)\n    ## Do something.\nend","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"Reading in a record from a FASTQ formatted file will give you a variable of type FASTQ.Record.","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"Various getters and setters are available for FASTQ.Records:","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"FASTQ.hasidentifier\nFASTQ.identifier\nFASTQ.hasdescription\nFASTQ.description\nFASTQ.hassequence\nFASTQ.sequence\nFASTQ.hasquality\nFASTQ.quality","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"To write a BioSequence to FASTQ file, you first have to create a FASTQ.Record:","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"As always with julia IO types, remember to close your file readers and writer after you are finished.","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"Using open with a do-block can help ensure you close a stream after you are finished.","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"open(FASTQ.Reader, \"my-reads.fastq\") do reader\n    for record in reader\n        ## Do something\n    end\nend","category":"page"},{"location":"manual/fastq/#Quality-encodings-1","page":"FASTQ formatted files","title":"Quality encodings","text":"","category":"section"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"FASTQ records have a quality string which have platform dependent encodings. The FASTQ submodule has encoding and decoding support for the following quality encodings. These can be used with a FASTQ.quality method, to ensure the correct quality score values are extracted from your FASTQ quality strings. ","category":"page"},{"location":"manual/fastq/#","page":"FASTQ formatted files","title":"FASTQ formatted files","text":"FASTQ.SANGER_QUAL_ENCODING\nFASTQ.SOLEXA_QUAL_ENCODING\nFASTQ.ILLUMINA13_QUAL_ENCODING\nFASTQ.ILLUMINA15_QUAL_ENCODING\nFASTQ.ILLUMINA18_QUAL_ENCODING","category":"page"},{"location":"lib/public/#","page":"Public","title":"Public","text":"CurrentModule = FASTX\nDocTestSetup = quote\n    using FASTX\nend","category":"page"},{"location":"lib/public/#Public-API-Reference-1","page":"Public","title":"Public API Reference","text":"","category":"section"},{"location":"lib/public/#Contents-1","page":"Public","title":"Contents","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"Pages = [\"public.md\"]","category":"page"},{"location":"lib/public/#","page":"Public","title":"Public","text":"Pages = [\"public.md\"]","category":"page"},{"location":"lib/public/#FASTA-API-1","page":"Public","title":"FASTA API","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"The following methods and types are provided by the FASTA submodule for public use. They are not exported as in general using FASTX requires qualifying the submodule (FASTA or FASTQ) that you are using.","category":"page"},{"location":"lib/public/#","page":"Public","title":"Public","text":"FASTA.Reader\nFASTA.Writer\nFASTA.Record\nFASTA.hasidentifier\nFASTA.identifier\nFASTA.hasdescription\nFASTA.description\nFASTA.hassequence\nFASTA.sequence\nFASTA.seqlen","category":"page"},{"location":"lib/public/#FASTX.FASTA.Reader","page":"Public","title":"FASTX.FASTA.Reader","text":"FASTA.Reader(input::IO; index = nothing)\n\nCreate a data reader of the FASTA file format.\n\nArguments\n\ninput: data source\nindex=nothing: filepath to a random access index (currently fai is supported)\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#FASTX.FASTA.Writer","page":"Public","title":"FASTX.FASTA.Writer","text":"FASTA.Writer(output::IO; width=70)\n\nCreate a data writer of the FASTA file format.\n\nArguments\n\noutput: data sink\nwidth=70: wrapping width of sequence characters\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#FASTX.FASTA.Record","page":"Public","title":"FASTX.FASTA.Record","text":"FASTA.Record()\n\nCreate an unfilled FASTA record.\n\n\n\n\n\nFASTA.Record(data::Vector{UInt8})\n\nCreate a FASTA record object from data.\n\nThis function verifies and indexes fields for accessors.\n\nwarning: Warning\nNote that the ownership of data is transferred to a new record object. Editing the input data will edit the record, and is not advised after  construction of the record.\n\n\n\n\n\nFASTA.Record(str::AbstractString)\n\nCreate a FASTA record object from str.\n\nThis function verifies and indexes fields for accessors.\n\n\n\n\n\nFASTA.Record(identifier, sequence)\n\nCreate a FASTA record object from identifier and sequence.\n\n\n\n\n\nFASTA.Record(identifier, description, sequence)\n\nCreate a FASTA record object from identifier, description and sequence.\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#FASTX.FASTA.hasidentifier","page":"Public","title":"FASTX.FASTA.hasidentifier","text":"hasidentifier(record::Record)\n\nChecks whether or not the record has an identifier.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.identifier","page":"Public","title":"FASTX.identifier","text":"identifier(record::Record)::Union{String,Nothing}\n\nGet the sequence identifier of record.\n\nnote: Note\nReturns nothing if the record has no identifier.\n\n\n\n\n\nidentifier(record::Record)::Union{String, Nothing}\n\nGet the sequence identifier of record.\n\nnote: Note\nReturns nothing if the record has no identifier.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTA.hasdescription","page":"Public","title":"FASTX.FASTA.hasdescription","text":"hasdescription(record::Record)\n\nChecks whether or not the record has a description.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.description","page":"Public","title":"FASTX.description","text":"description(record::Record)::Union{String, Nothing}\n\nGet the description of record.\n\nnote: Note\nReturns nothing if record has no description.\n\n\n\n\n\ndescription(record::Record)::Union{String, Nothing}\n\nGet the description of record.\n\nnote: Note\nReturns nothing if record has no description.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTA.hassequence","page":"Public","title":"FASTX.FASTA.hassequence","text":"hassequence(record::Record)\n\nChecks whether or not a sequence record contains a sequence.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.sequence","page":"Public","title":"FASTX.sequence","text":"sequence(::Type{S}, record::Record, [part::UnitRange{Int}])\n\nGet the sequence of record.\n\nS can be either a subtype of BioSequences.LongSequence or String. If part argument is given, it returns the specified part of the sequence.\n\nnote: Note\nThis method makes a new sequence object every time. If you have a sequence already and want to fill it with the sequence data contained in a fastq record, you can use Base.copyto!.\n\n\n\n\n\nsequence(::Type{String}, record::Record, [part::UnitRange{Int}])::String\n\nGet the sequence of record as a String. If part argument is given, it returns the specified part of the sequence.\n\n\n\n\n\nsequence(record::Record, [part::UnitRange{Int}])::BioSequences.DNASequence\n\nGet the sequence of record.\n\nnote: Note\nThis method makes a new sequence object every time. If you have a sequence already and want to fill it with the sequence data contained in a fastq record, you can use Base.copyto!.\n\n\n\n\n\nsequence(::Type{S}, record::Record, [part::UnitRange{Int}])::S\n\nGet the sequence of record.\n\nS can be either a subtype of BioSequences.BioSequence or String. If part argument is given, it returns the specified part of the sequence.\n\nnote: Note\nThis method makes a new sequence object every time. If you have a sequence already and want to fill it with the sequence data contained in a fasta record, you can use Base.copyto!.\n\n\n\n\n\nsequence(record::Record, [part::UnitRange{Int}])\n\nGet the sequence of record.\n\nThis function infers the sequence type from the data. When it is wrong or unreliable, use sequence(::Type{S}, record::Record).  If part argument is given, it returns the specified part of the sequence.\n\nnote: Note\nThis method makes a new sequence object every time. If you have a sequence already and want to fill it with the sequence data contained in a fasta record, you can use Base.copyto!.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTA.seqlen","page":"Public","title":"FASTX.FASTA.seqlen","text":"Get the length of the fasta record's sequence.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTQ-API-1","page":"Public","title":"FASTQ API","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"The following methods and types are provided by the FASTQ submodule for public use. They are not exported as in general using FASTX requires qualifying the submodule (FASTA or FASTQ) that you are using.","category":"page"},{"location":"lib/public/#","page":"Public","title":"Public","text":"FASTQ.Reader\nFASTQ.Writer\nFASTQ.Record\nFASTQ.hasidentifier\nFASTQ.identifier\nFASTQ.hasdescription\nFASTQ.description\nFASTQ.hassequence\nFASTQ.sequence\nFASTQ.seqlen\nFASTQ.hasquality\nFASTQ.quality\nFASTQ.SANGER_QUAL_ENCODING\nFASTQ.SOLEXA_QUAL_ENCODING\nFASTQ.ILLUMINA13_QUAL_ENCODING\nFASTQ.ILLUMINA15_QUAL_ENCODING\nFASTQ.ILLUMINA18_QUAL_ENCODING","category":"page"},{"location":"lib/public/#FASTX.FASTQ.Reader","page":"Public","title":"FASTX.FASTQ.Reader","text":"FASTQ.Reader(input::IO; fill_ambiguous=nothing)\n\nCreate a data reader of the FASTQ file format.\n\nArguments\n\ninput: data source\nfill_ambiguous=nothing: fill ambiguous symbols with the given symbol\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#FASTX.FASTQ.Writer","page":"Public","title":"FASTX.FASTQ.Writer","text":"FASTQ.Writer(output::IO; quality_header=false)\n\nCreate a data writer of the FASTQ file format.\n\nArguments\n\noutput: data sink\nquality_header=false: output the title line at the third line just after '+'\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#FASTX.FASTQ.Record","page":"Public","title":"FASTX.FASTQ.Record","text":"FASTQ.Record()\n\nCreate an unfilled FASTQ record.\n\n\n\n\n\nFASTQ.Record(data::Vector{UInt8})\n\nCreate a FASTQ record object from data.\n\nThis function verifies and indexes fields for accessors.\n\nwarning: Warning\nNote that the ownership of data is transferred to a new record object. Editing the input data will edit the record, and is not advised after  construction of the record.\n\n\n\n\n\nFASTQ.Record(str::AbstractString)\n\nCreate a FASTQ record object from str.\n\nThis function verifies and indexes fields for accessors.\n\n\n\n\n\nFASTQ.Record(identifier, sequence, quality; offset=33)\n\nCreate a FASTQ record from identifier, sequence and quality.\n\n\n\n\n\nFASTQ.Record(identifier, description, sequence, quality; offset=33)\n\nCreate a FASTQ record from identifier, description, sequence and quality.\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#FASTX.FASTQ.hasidentifier","page":"Public","title":"FASTX.FASTQ.hasidentifier","text":"hasidentifier(record::Record)\n\nChecks whether or not the record has an identifier.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTQ.hasdescription","page":"Public","title":"FASTX.FASTQ.hasdescription","text":"hasdescription(record::Record)\n\nChecks whether or not the record has a description.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTQ.hassequence","page":"Public","title":"FASTX.FASTQ.hassequence","text":"hassequence(record::Record)\n\nChecks whether or not a sequence record contains a sequence.\n\nnote: Note\nZero-length sequences are allowed in records.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTQ.seqlen","page":"Public","title":"FASTX.FASTQ.seqlen","text":"Get the length of the fastq record's sequence.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTQ.hasquality","page":"Public","title":"FASTX.FASTQ.hasquality","text":"hasquality(record::Record)\n\nCheck whether the given FASTQ record has a quality string.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTQ.quality","page":"Public","title":"FASTX.FASTQ.quality","text":"quality(record::Record, [offset::Integer=33, [part::UnitRange]])::Vector{UInt8}\n\nGet the base quality of record.\n\n\n\n\n\nquality(record::Record, encoding_name::Symbol, [part::UnitRange])::Vector{UInt8}\n\nGet the base quality of record by decoding with encoding_name.\n\nThe encoding_name can be either :sanger, :solexa, :illumina13, :illumina15, or :illumina18.\n\nnote: Note\nReturns nothing if the record has no quality string.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#FASTX.FASTQ.SANGER_QUAL_ENCODING","page":"Public","title":"FASTX.FASTQ.SANGER_QUAL_ENCODING","text":"Sanger (Phred+33) quality score encoding\n\n\n\n\n\n","category":"constant"},{"location":"lib/public/#FASTX.FASTQ.SOLEXA_QUAL_ENCODING","page":"Public","title":"FASTX.FASTQ.SOLEXA_QUAL_ENCODING","text":"Solexa (Solexa+64) quality score encoding\n\n\n\n\n\n","category":"constant"},{"location":"lib/public/#FASTX.FASTQ.ILLUMINA13_QUAL_ENCODING","page":"Public","title":"FASTX.FASTQ.ILLUMINA13_QUAL_ENCODING","text":"Illumina 1.3 (Phred+64) quality score encoding\n\n\n\n\n\n","category":"constant"},{"location":"lib/public/#FASTX.FASTQ.ILLUMINA15_QUAL_ENCODING","page":"Public","title":"FASTX.FASTQ.ILLUMINA15_QUAL_ENCODING","text":"Illumina 1.5 (Phred+64) quality score encoding\n\n\n\n\n\n","category":"constant"},{"location":"lib/public/#FASTX.FASTQ.ILLUMINA18_QUAL_ENCODING","page":"Public","title":"FASTX.FASTQ.ILLUMINA18_QUAL_ENCODING","text":"Illumina 1.8 (Phred+33) quality score encoding\n\n\n\n\n\n","category":"constant"}]
}
